const { getUserId } = require('../utils')

async function schools(parent, args, context) {
  const locationCode = args.locationCode ? args.locationCode : ""
  const schools = await context.prisma.schools({
    where: {
      location: { code: locationCode }
    }
  })
  return schools
}

async function school(parent, args, context) {
  const schoolCode = args.schoolCode ? args.schoolCode : ""
  const school = await context.prisma.school({
    code: schoolCode
  })
  return school
}

async function me(parent, args, context) {
  const userId = getUserId(context)
  return context.prisma.user({id:userId})
}

async function hasUsername(parent, args, context) {
  const user = await context.prisma.user({
    username: args.username
  })
  if (user) {
    return true
  } else {
    return false
  }
}

async function statistics(parent, args, context) {
  const userId = getUserId(context)
  const result = await context.prisma.user({
    id: userId
  }).statistics()
  return result
}


module.exports = {
  schools,
  school,
  hasUsername,
  statistics,
  me
}
