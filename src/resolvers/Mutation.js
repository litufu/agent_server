const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')
const Papa = require('papaparse')
const fs = require('fs')
const gaozhongFile = './src/data/gaozhong.csv'
const {result} = require('../data/users')

const moment = require('moment')
require('moment/locale/zh-cn')
moment.locale('zh-cn')

const readFile = function (fileName, encode) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, encode, function (error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const parseCsv = function (data) {
  return new Promise(function (resolve, reject) {
    Papa.parse(data, {
      complete: function (results) {
        resolve(results);
      }
    });
  });
};


async function createStudents(parent, args, context) {
  for(const student of result.data.users){
    if(student.studies.length>0){
      const hasStudent = await context.prisma.student({userId:student.id})
      if(!hasStudent){
        const newStudent = await context.prisma.createStudent({
          userId:student.id,
          schoolName:student.studies[0].school.name,
          locationCode:student.studies[0].school.location.area.code
        })
        console.log(newStudent)
      }
      
    }
  }
  return []
}

async function createStatistics(parent, args, context){
  const now = moment().toISOString()
  const schools = await context.prisma.schools()
  for(const school of schools){
    const schoolSeller = await context.prisma.school({id:school.id}).user()
    if(schoolSeller){
      console.log(school)
      console.log(schoolSeller)
      const schoolLocation = await context.prisma.school({id:school.id}).location()
      const students = await context.prisma.students({
        where:{
          AND:[
            {schoolName:school.name},
            {locationCode:schoolLocation.code}
          ]
        }
      })
      const studentsNum = students.length
      await context.prisma.createStatistic({
        date:now,
        studentsNum,
        validNum:0,
        settlement:false,
        school:{
          connect:{id:school.id}
        },
        user:{
          connect:{id:schoolSeller.id}
        }
      })
    }
  }
  return []
}

async function createStatistic(schoolCode,schoolSellerId,context){
  const now = moment().toISOString()
  const school = await context.prisma.school({code:schoolCode})
  const schoolLocation = await context.prisma.school({id:school.id}).location()
  const students = await context.prisma.students({
    where:{
      AND:[
        {schoolName:school.name},
        {locationCode:schoolLocation.code}
      ]
    }
  })
  const studentsNum = students.length
  await context.prisma.createStatistic({
    date:now,
    studentsNum,
    validNum:0,
    settlement:false,
    school:{
      connect:{id:school.id}
    },
    user:{
      connect:{id:schoolSellerId}
    }
  })
  return []
}


async function createLocations(parent, args, context) {
  console.log(args.username)
  try {
    const file = await readFile(gaozhongFile, 'utf8')
    const results = await parseCsv(file)
    for (const value of results.data) {
      console.log(value)
      const areaName = value[6]
      const areaCode = value[7]
      const schoolName = value[8]
      const schoolCode = value[9]
      if(schoolCode === "shool_code"){
          continue
      }
      const place = await context.prisma.location({ code: areaCode })
      if(!place){
        const location = await context.prisma.createLocation({
          name: areaName,
          code:areaCode,
          schools:{
              create: { 
                  name: schoolName,
                  code:schoolCode,
                  hasAgent:false,
               },
          }
        })
        console.log(location)
      }else{
        const school = await context.prisma.school({ code: schoolCode })
        if(!school){
          const newschool = await context.prisma.createSchool({
              name: schoolName,
              code:schoolCode,
              hasAgent:false,
              location:{
                  connect: { 
                      code:areaCode,
                   },
              }
            })
            console.log(newschool)
        }
      }

    }
  } catch (err) {
    console.log(err);
  }
  return []
  
}

async function signup(parent, args, context) {
  const password = await bcrypt.hash(args.password, 10)+ ""
  const now = moment().toISOString()
  console.log(now)
  const user = await context.prisma.createUser({ 
    name:args.name+ "", 
    username:args.username+ "",
    account:args.account+ "",
    accountType:args.accountType+ "",
    password,
    school:{
      connect: { code: args.schoolCode+ "" },
    },
    createTime:now,
  })

  const school = await context.prisma.updateSchool({
    where:{code:args.schoolCode},
    data:{hasAgent:true}
  })

  await createStatistic(school.code,user.id,context)

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

async function login(parent, args, context) {
  console.log('password',args)
  const user = await context.prisma.user({ username: args.username })
  if (!user) {
    throw new Error('No such user found')
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  return {
    token: jwt.sign({ userId: user.id }, APP_SECRET),
    user,
  }
}


module.exports = {
  createLocations,
  signup,
  login,
  createStudents,
  createStatistics,
}
