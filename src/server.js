const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
// const schema = require("./schema");
import schema from "./schema";
require("dotenv").config();

// const logger = require("morgan");
import morgan from "morgan";
const PORT = process.env.PORT || 4000;

const serverStart = async () => {
  const app = express();
  const server = new ApolloServer(schema);
  await server.start();

  server.applyMiddleware({ app });

  app.use(morgan("dev"));
  app.use((req, res) => {
    res.status(200);
    res.send("Hello!");
    res.end();
  });

  await new Promise((resolve) => app.listen({ port: PORT }, resolve));
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
  return { server, app };
};

serverStart();
