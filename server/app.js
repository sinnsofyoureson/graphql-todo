const express = require("express");
const jsonGraphqlExpress = require("json-graphql-server");
const { todos } = require("./schema/mocks");
// const { graphqlHTTP } = require("express-graphql");
// const schema = require("./schema/schema");
// const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

const data = { todos };

//  Use code below if you have configured MongoDB
//
//  mongoose.connect("mongodb://", { useNewUrlParser: true });
//  app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));
//  const dbConnection = mongoose.connection;
//  dbConnection.on("error", (error) => console.log("DB connection error", error));
//  dbConnection.once("open", () => "DB connection established!");

// Use this for fake GraphQl database
app.use("/graphql", jsonGraphqlExpress.default(data));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log("Launch sequnce completed!");
});
