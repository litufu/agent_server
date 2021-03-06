module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateLocation {
  count: Int!
}

type AggregateSchool {
  count: Int!
}

type AggregateStatistic {
  count: Int!
}

type AggregateStudent {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Location {
  id: ID!
  code: String!
  name: String!
  schools(where: SchoolWhereInput, orderBy: SchoolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [School!]
}

type LocationConnection {
  pageInfo: PageInfo!
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  id: ID
  code: String!
  name: String!
  schools: SchoolCreateManyWithoutLocationInput
}

input LocationCreateOneWithoutSchoolsInput {
  create: LocationCreateWithoutSchoolsInput
  connect: LocationWhereUniqueInput
}

input LocationCreateWithoutSchoolsInput {
  id: ID
  code: String!
  name: String!
}

type LocationEdge {
  node: Location!
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  code_ASC
  code_DESC
  name_ASC
  name_DESC
}

type LocationPreviousValues {
  id: ID!
  code: String!
  name: String!
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
  AND: [LocationSubscriptionWhereInput!]
  OR: [LocationSubscriptionWhereInput!]
  NOT: [LocationSubscriptionWhereInput!]
}

input LocationUpdateInput {
  code: String
  name: String
  schools: SchoolUpdateManyWithoutLocationInput
}

input LocationUpdateManyMutationInput {
  code: String
  name: String
}

input LocationUpdateOneWithoutSchoolsInput {
  create: LocationCreateWithoutSchoolsInput
  update: LocationUpdateWithoutSchoolsDataInput
  upsert: LocationUpsertWithoutSchoolsInput
  delete: Boolean
  disconnect: Boolean
  connect: LocationWhereUniqueInput
}

input LocationUpdateWithoutSchoolsDataInput {
  code: String
  name: String
}

input LocationUpsertWithoutSchoolsInput {
  update: LocationUpdateWithoutSchoolsDataInput!
  create: LocationCreateWithoutSchoolsInput!
}

input LocationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  schools_every: SchoolWhereInput
  schools_some: SchoolWhereInput
  schools_none: SchoolWhereInput
  AND: [LocationWhereInput!]
  OR: [LocationWhereInput!]
  NOT: [LocationWhereInput!]
}

input LocationWhereUniqueInput {
  id: ID
  code: String
  name: String
}

scalar Long

type Mutation {
  createLocation(data: LocationCreateInput!): Location!
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateManyLocations(data: LocationUpdateManyMutationInput!, where: LocationWhereInput): BatchPayload!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  createSchool(data: SchoolCreateInput!): School!
  updateSchool(data: SchoolUpdateInput!, where: SchoolWhereUniqueInput!): School
  updateManySchools(data: SchoolUpdateManyMutationInput!, where: SchoolWhereInput): BatchPayload!
  upsertSchool(where: SchoolWhereUniqueInput!, create: SchoolCreateInput!, update: SchoolUpdateInput!): School!
  deleteSchool(where: SchoolWhereUniqueInput!): School
  deleteManySchools(where: SchoolWhereInput): BatchPayload!
  createStatistic(data: StatisticCreateInput!): Statistic!
  updateStatistic(data: StatisticUpdateInput!, where: StatisticWhereUniqueInput!): Statistic
  updateManyStatistics(data: StatisticUpdateManyMutationInput!, where: StatisticWhereInput): BatchPayload!
  upsertStatistic(where: StatisticWhereUniqueInput!, create: StatisticCreateInput!, update: StatisticUpdateInput!): Statistic!
  deleteStatistic(where: StatisticWhereUniqueInput!): Statistic
  deleteManyStatistics(where: StatisticWhereInput): BatchPayload!
  createStudent(data: StudentCreateInput!): Student!
  updateStudent(data: StudentUpdateInput!, where: StudentWhereUniqueInput!): Student
  updateManyStudents(data: StudentUpdateManyMutationInput!, where: StudentWhereInput): BatchPayload!
  upsertStudent(where: StudentWhereUniqueInput!, create: StudentCreateInput!, update: StudentUpdateInput!): Student!
  deleteStudent(where: StudentWhereUniqueInput!): Student
  deleteManyStudents(where: StudentWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  location(where: LocationWhereUniqueInput!): Location
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  school(where: SchoolWhereUniqueInput!): School
  schools(where: SchoolWhereInput, orderBy: SchoolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [School]!
  schoolsConnection(where: SchoolWhereInput, orderBy: SchoolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SchoolConnection!
  statistic(where: StatisticWhereUniqueInput!): Statistic
  statistics(where: StatisticWhereInput, orderBy: StatisticOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Statistic]!
  statisticsConnection(where: StatisticWhereInput, orderBy: StatisticOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StatisticConnection!
  student(where: StudentWhereUniqueInput!): Student
  students(where: StudentWhereInput, orderBy: StudentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Student]!
  studentsConnection(where: StudentWhereInput, orderBy: StudentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StudentConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type School {
  id: ID!
  name: String!
  code: String!
  hasAgent: Boolean!
  user: User
  location: Location
}

type SchoolConnection {
  pageInfo: PageInfo!
  edges: [SchoolEdge]!
  aggregate: AggregateSchool!
}

input SchoolCreateInput {
  id: ID
  name: String!
  code: String!
  hasAgent: Boolean!
  user: UserCreateOneWithoutSchoolInput
  location: LocationCreateOneWithoutSchoolsInput
}

input SchoolCreateManyWithoutLocationInput {
  create: [SchoolCreateWithoutLocationInput!]
  connect: [SchoolWhereUniqueInput!]
}

input SchoolCreateOneInput {
  create: SchoolCreateInput
  connect: SchoolWhereUniqueInput
}

input SchoolCreateOneWithoutUserInput {
  create: SchoolCreateWithoutUserInput
  connect: SchoolWhereUniqueInput
}

input SchoolCreateWithoutLocationInput {
  id: ID
  name: String!
  code: String!
  hasAgent: Boolean!
  user: UserCreateOneWithoutSchoolInput
}

input SchoolCreateWithoutUserInput {
  id: ID
  name: String!
  code: String!
  hasAgent: Boolean!
  location: LocationCreateOneWithoutSchoolsInput
}

type SchoolEdge {
  node: School!
  cursor: String!
}

enum SchoolOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  code_ASC
  code_DESC
  hasAgent_ASC
  hasAgent_DESC
}

type SchoolPreviousValues {
  id: ID!
  name: String!
  code: String!
  hasAgent: Boolean!
}

input SchoolScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  hasAgent: Boolean
  hasAgent_not: Boolean
  AND: [SchoolScalarWhereInput!]
  OR: [SchoolScalarWhereInput!]
  NOT: [SchoolScalarWhereInput!]
}

type SchoolSubscriptionPayload {
  mutation: MutationType!
  node: School
  updatedFields: [String!]
  previousValues: SchoolPreviousValues
}

input SchoolSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SchoolWhereInput
  AND: [SchoolSubscriptionWhereInput!]
  OR: [SchoolSubscriptionWhereInput!]
  NOT: [SchoolSubscriptionWhereInput!]
}

input SchoolUpdateDataInput {
  name: String
  code: String
  hasAgent: Boolean
  user: UserUpdateOneWithoutSchoolInput
  location: LocationUpdateOneWithoutSchoolsInput
}

input SchoolUpdateInput {
  name: String
  code: String
  hasAgent: Boolean
  user: UserUpdateOneWithoutSchoolInput
  location: LocationUpdateOneWithoutSchoolsInput
}

input SchoolUpdateManyDataInput {
  name: String
  code: String
  hasAgent: Boolean
}

input SchoolUpdateManyMutationInput {
  name: String
  code: String
  hasAgent: Boolean
}

input SchoolUpdateManyWithoutLocationInput {
  create: [SchoolCreateWithoutLocationInput!]
  delete: [SchoolWhereUniqueInput!]
  connect: [SchoolWhereUniqueInput!]
  set: [SchoolWhereUniqueInput!]
  disconnect: [SchoolWhereUniqueInput!]
  update: [SchoolUpdateWithWhereUniqueWithoutLocationInput!]
  upsert: [SchoolUpsertWithWhereUniqueWithoutLocationInput!]
  deleteMany: [SchoolScalarWhereInput!]
  updateMany: [SchoolUpdateManyWithWhereNestedInput!]
}

input SchoolUpdateManyWithWhereNestedInput {
  where: SchoolScalarWhereInput!
  data: SchoolUpdateManyDataInput!
}

input SchoolUpdateOneInput {
  create: SchoolCreateInput
  update: SchoolUpdateDataInput
  upsert: SchoolUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: SchoolWhereUniqueInput
}

input SchoolUpdateOneRequiredWithoutUserInput {
  create: SchoolCreateWithoutUserInput
  update: SchoolUpdateWithoutUserDataInput
  upsert: SchoolUpsertWithoutUserInput
  connect: SchoolWhereUniqueInput
}

input SchoolUpdateWithoutLocationDataInput {
  name: String
  code: String
  hasAgent: Boolean
  user: UserUpdateOneWithoutSchoolInput
}

input SchoolUpdateWithoutUserDataInput {
  name: String
  code: String
  hasAgent: Boolean
  location: LocationUpdateOneWithoutSchoolsInput
}

input SchoolUpdateWithWhereUniqueWithoutLocationInput {
  where: SchoolWhereUniqueInput!
  data: SchoolUpdateWithoutLocationDataInput!
}

input SchoolUpsertNestedInput {
  update: SchoolUpdateDataInput!
  create: SchoolCreateInput!
}

input SchoolUpsertWithoutUserInput {
  update: SchoolUpdateWithoutUserDataInput!
  create: SchoolCreateWithoutUserInput!
}

input SchoolUpsertWithWhereUniqueWithoutLocationInput {
  where: SchoolWhereUniqueInput!
  update: SchoolUpdateWithoutLocationDataInput!
  create: SchoolCreateWithoutLocationInput!
}

input SchoolWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  hasAgent: Boolean
  hasAgent_not: Boolean
  user: UserWhereInput
  location: LocationWhereInput
  AND: [SchoolWhereInput!]
  OR: [SchoolWhereInput!]
  NOT: [SchoolWhereInput!]
}

input SchoolWhereUniqueInput {
  id: ID
  code: String
}

type Statistic {
  id: ID!
  date: DateTime
  school: School
  studentsNum: Int!
  validNum: Int!
  user: User
  settlement: Boolean
}

type StatisticConnection {
  pageInfo: PageInfo!
  edges: [StatisticEdge]!
  aggregate: AggregateStatistic!
}

input StatisticCreateInput {
  id: ID
  date: DateTime
  school: SchoolCreateOneInput
  studentsNum: Int!
  validNum: Int!
  user: UserCreateOneWithoutStatisticsInput
  settlement: Boolean
}

input StatisticCreateManyWithoutUserInput {
  create: [StatisticCreateWithoutUserInput!]
  connect: [StatisticWhereUniqueInput!]
}

input StatisticCreateWithoutUserInput {
  id: ID
  date: DateTime
  school: SchoolCreateOneInput
  studentsNum: Int!
  validNum: Int!
  settlement: Boolean
}

type StatisticEdge {
  node: Statistic!
  cursor: String!
}

enum StatisticOrderByInput {
  id_ASC
  id_DESC
  date_ASC
  date_DESC
  studentsNum_ASC
  studentsNum_DESC
  validNum_ASC
  validNum_DESC
  settlement_ASC
  settlement_DESC
}

type StatisticPreviousValues {
  id: ID!
  date: DateTime
  studentsNum: Int!
  validNum: Int!
  settlement: Boolean
}

input StatisticScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  studentsNum: Int
  studentsNum_not: Int
  studentsNum_in: [Int!]
  studentsNum_not_in: [Int!]
  studentsNum_lt: Int
  studentsNum_lte: Int
  studentsNum_gt: Int
  studentsNum_gte: Int
  validNum: Int
  validNum_not: Int
  validNum_in: [Int!]
  validNum_not_in: [Int!]
  validNum_lt: Int
  validNum_lte: Int
  validNum_gt: Int
  validNum_gte: Int
  settlement: Boolean
  settlement_not: Boolean
  AND: [StatisticScalarWhereInput!]
  OR: [StatisticScalarWhereInput!]
  NOT: [StatisticScalarWhereInput!]
}

type StatisticSubscriptionPayload {
  mutation: MutationType!
  node: Statistic
  updatedFields: [String!]
  previousValues: StatisticPreviousValues
}

input StatisticSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StatisticWhereInput
  AND: [StatisticSubscriptionWhereInput!]
  OR: [StatisticSubscriptionWhereInput!]
  NOT: [StatisticSubscriptionWhereInput!]
}

input StatisticUpdateInput {
  date: DateTime
  school: SchoolUpdateOneInput
  studentsNum: Int
  validNum: Int
  user: UserUpdateOneWithoutStatisticsInput
  settlement: Boolean
}

input StatisticUpdateManyDataInput {
  date: DateTime
  studentsNum: Int
  validNum: Int
  settlement: Boolean
}

input StatisticUpdateManyMutationInput {
  date: DateTime
  studentsNum: Int
  validNum: Int
  settlement: Boolean
}

input StatisticUpdateManyWithoutUserInput {
  create: [StatisticCreateWithoutUserInput!]
  delete: [StatisticWhereUniqueInput!]
  connect: [StatisticWhereUniqueInput!]
  set: [StatisticWhereUniqueInput!]
  disconnect: [StatisticWhereUniqueInput!]
  update: [StatisticUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [StatisticUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [StatisticScalarWhereInput!]
  updateMany: [StatisticUpdateManyWithWhereNestedInput!]
}

input StatisticUpdateManyWithWhereNestedInput {
  where: StatisticScalarWhereInput!
  data: StatisticUpdateManyDataInput!
}

input StatisticUpdateWithoutUserDataInput {
  date: DateTime
  school: SchoolUpdateOneInput
  studentsNum: Int
  validNum: Int
  settlement: Boolean
}

input StatisticUpdateWithWhereUniqueWithoutUserInput {
  where: StatisticWhereUniqueInput!
  data: StatisticUpdateWithoutUserDataInput!
}

input StatisticUpsertWithWhereUniqueWithoutUserInput {
  where: StatisticWhereUniqueInput!
  update: StatisticUpdateWithoutUserDataInput!
  create: StatisticCreateWithoutUserInput!
}

input StatisticWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  school: SchoolWhereInput
  studentsNum: Int
  studentsNum_not: Int
  studentsNum_in: [Int!]
  studentsNum_not_in: [Int!]
  studentsNum_lt: Int
  studentsNum_lte: Int
  studentsNum_gt: Int
  studentsNum_gte: Int
  validNum: Int
  validNum_not: Int
  validNum_in: [Int!]
  validNum_not_in: [Int!]
  validNum_lt: Int
  validNum_lte: Int
  validNum_gt: Int
  validNum_gte: Int
  user: UserWhereInput
  settlement: Boolean
  settlement_not: Boolean
  AND: [StatisticWhereInput!]
  OR: [StatisticWhereInput!]
  NOT: [StatisticWhereInput!]
}

input StatisticWhereUniqueInput {
  id: ID
}

type Student {
  id: ID!
  userId: String!
  schoolName: String!
  locationCode: String!
}

type StudentConnection {
  pageInfo: PageInfo!
  edges: [StudentEdge]!
  aggregate: AggregateStudent!
}

input StudentCreateInput {
  id: ID
  userId: String!
  schoolName: String!
  locationCode: String!
}

type StudentEdge {
  node: Student!
  cursor: String!
}

enum StudentOrderByInput {
  id_ASC
  id_DESC
  userId_ASC
  userId_DESC
  schoolName_ASC
  schoolName_DESC
  locationCode_ASC
  locationCode_DESC
}

type StudentPreviousValues {
  id: ID!
  userId: String!
  schoolName: String!
  locationCode: String!
}

type StudentSubscriptionPayload {
  mutation: MutationType!
  node: Student
  updatedFields: [String!]
  previousValues: StudentPreviousValues
}

input StudentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StudentWhereInput
  AND: [StudentSubscriptionWhereInput!]
  OR: [StudentSubscriptionWhereInput!]
  NOT: [StudentSubscriptionWhereInput!]
}

input StudentUpdateInput {
  userId: String
  schoolName: String
  locationCode: String
}

input StudentUpdateManyMutationInput {
  userId: String
  schoolName: String
  locationCode: String
}

input StudentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  userId: String
  userId_not: String
  userId_in: [String!]
  userId_not_in: [String!]
  userId_lt: String
  userId_lte: String
  userId_gt: String
  userId_gte: String
  userId_contains: String
  userId_not_contains: String
  userId_starts_with: String
  userId_not_starts_with: String
  userId_ends_with: String
  userId_not_ends_with: String
  schoolName: String
  schoolName_not: String
  schoolName_in: [String!]
  schoolName_not_in: [String!]
  schoolName_lt: String
  schoolName_lte: String
  schoolName_gt: String
  schoolName_gte: String
  schoolName_contains: String
  schoolName_not_contains: String
  schoolName_starts_with: String
  schoolName_not_starts_with: String
  schoolName_ends_with: String
  schoolName_not_ends_with: String
  locationCode: String
  locationCode_not: String
  locationCode_in: [String!]
  locationCode_not_in: [String!]
  locationCode_lt: String
  locationCode_lte: String
  locationCode_gt: String
  locationCode_gte: String
  locationCode_contains: String
  locationCode_not_contains: String
  locationCode_starts_with: String
  locationCode_not_starts_with: String
  locationCode_ends_with: String
  locationCode_not_ends_with: String
  AND: [StudentWhereInput!]
  OR: [StudentWhereInput!]
  NOT: [StudentWhereInput!]
}

input StudentWhereUniqueInput {
  id: ID
  userId: String
}

type Subscription {
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  school(where: SchoolSubscriptionWhereInput): SchoolSubscriptionPayload
  statistic(where: StatisticSubscriptionWhereInput): StatisticSubscriptionPayload
  student(where: StudentSubscriptionWhereInput): StudentSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  username: String!
  password: String!
  accountType: String!
  account: String!
  school: School!
  statistics(where: StatisticWhereInput, orderBy: StatisticOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Statistic!]
  createTime: DateTime
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  username: String!
  password: String!
  accountType: String!
  account: String!
  school: SchoolCreateOneWithoutUserInput!
  statistics: StatisticCreateManyWithoutUserInput
  createTime: DateTime
}

input UserCreateOneWithoutSchoolInput {
  create: UserCreateWithoutSchoolInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutStatisticsInput {
  create: UserCreateWithoutStatisticsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutSchoolInput {
  id: ID
  name: String!
  username: String!
  password: String!
  accountType: String!
  account: String!
  statistics: StatisticCreateManyWithoutUserInput
  createTime: DateTime
}

input UserCreateWithoutStatisticsInput {
  id: ID
  name: String!
  username: String!
  password: String!
  accountType: String!
  account: String!
  school: SchoolCreateOneWithoutUserInput!
  createTime: DateTime
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  accountType_ASC
  accountType_DESC
  account_ASC
  account_DESC
  createTime_ASC
  createTime_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  username: String!
  password: String!
  accountType: String!
  account: String!
  createTime: DateTime
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  username: String
  password: String
  accountType: String
  account: String
  school: SchoolUpdateOneRequiredWithoutUserInput
  statistics: StatisticUpdateManyWithoutUserInput
  createTime: DateTime
}

input UserUpdateManyMutationInput {
  name: String
  username: String
  password: String
  accountType: String
  account: String
  createTime: DateTime
}

input UserUpdateOneWithoutSchoolInput {
  create: UserCreateWithoutSchoolInput
  update: UserUpdateWithoutSchoolDataInput
  upsert: UserUpsertWithoutSchoolInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutStatisticsInput {
  create: UserCreateWithoutStatisticsInput
  update: UserUpdateWithoutStatisticsDataInput
  upsert: UserUpsertWithoutStatisticsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutSchoolDataInput {
  name: String
  username: String
  password: String
  accountType: String
  account: String
  statistics: StatisticUpdateManyWithoutUserInput
  createTime: DateTime
}

input UserUpdateWithoutStatisticsDataInput {
  name: String
  username: String
  password: String
  accountType: String
  account: String
  school: SchoolUpdateOneRequiredWithoutUserInput
  createTime: DateTime
}

input UserUpsertWithoutSchoolInput {
  update: UserUpdateWithoutSchoolDataInput!
  create: UserCreateWithoutSchoolInput!
}

input UserUpsertWithoutStatisticsInput {
  update: UserUpdateWithoutStatisticsDataInput!
  create: UserCreateWithoutStatisticsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  accountType: String
  accountType_not: String
  accountType_in: [String!]
  accountType_not_in: [String!]
  accountType_lt: String
  accountType_lte: String
  accountType_gt: String
  accountType_gte: String
  accountType_contains: String
  accountType_not_contains: String
  accountType_starts_with: String
  accountType_not_starts_with: String
  accountType_ends_with: String
  accountType_not_ends_with: String
  account: String
  account_not: String
  account_in: [String!]
  account_not_in: [String!]
  account_lt: String
  account_lte: String
  account_gt: String
  account_gte: String
  account_contains: String
  account_not_contains: String
  account_starts_with: String
  account_not_starts_with: String
  account_ends_with: String
  account_not_ends_with: String
  school: SchoolWhereInput
  statistics_every: StatisticWhereInput
  statistics_some: StatisticWhereInput
  statistics_none: StatisticWhereInput
  createTime: DateTime
  createTime_not: DateTime
  createTime_in: [DateTime!]
  createTime_not_in: [DateTime!]
  createTime_lt: DateTime
  createTime_lte: DateTime
  createTime_gt: DateTime
  createTime_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
}
`
      }
    