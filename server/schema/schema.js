const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require("graphql");

const GetMovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const Query = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getMovie: {
      type: GetMovieType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {},
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
