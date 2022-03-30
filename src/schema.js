import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

const typesArray = loadFilesSync(path.join(__dirname, "/api/**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "/api/**/*.js"));

const schema = {
  typeDefs: mergeTypeDefs(typesArray),
  resolvers: mergeResolvers(resolversArray),
};

module.exports = schema;
