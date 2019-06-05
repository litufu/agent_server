"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Location",
    embedded: false
  },
  {
    name: "Statistic",
    embedded: false
  },
  {
    name: "Student",
    embedded: false
  },
  {
    name: "School",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://192.168.99.100:4477`,
  secret: `mysecret123`
});
exports.prisma = new exports.Prisma();
