const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
} = require("graphql");
const { movies, directors } = require("./mocks");

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    director: {
      type: DirectorType,
      resolve(parent, _args) {
        return directors.find((director) => director.id == parent.id);
      },
    },
  }),
});

const DirectorType = new GraphQLObjectType({
  name: "Director",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

const Query = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getMovie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(_parent, args) {
        return movies.find((movie) => movie.id == args.id);
      },
    },
    getDirector: {
      type: DirectorType,
      args: { id: { type: GraphQLID } },
      resolve(_parent, args) {
        return directors.find((director) => director.id == args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
