const express = require("express");
const jsonGraphqlExpress = require("json-graphql-server");
const { todos } = require("./schema/mocks");
// const { graphqlHTTP } = require("express-graphql");
// const schema = require("./schema/schema");

const app = express();
const PORT = 4000;

// app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

const data = { todos };
app.use("/graphql", jsonGraphqlExpress.default(data));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log("Launch sequnce completed!");
});
