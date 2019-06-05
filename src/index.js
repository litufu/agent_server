const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const School = require('./resolvers/School')
const Location = require('./resolvers/Location')
const Statistic = require('./resolvers/Statistic')

const resolvers = {
  Query,
  Mutation,
  User,
  School,
  Location,
  Statistic,
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => ({
    ...request,
    prisma,
  }),
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
