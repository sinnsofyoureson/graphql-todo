const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = require("graphql");
const Movies = require("../models/movie");
const Directors = require("../models/director");
// const { movies, directors } = require("./mocks");

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    director: {
      type: DirectorType,
      resolve(parent, _args) {
        // return directors.find((director) => director.id == parent.id);
        return Directors.findById(parent.directorId);
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
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, _args) {
        // return movies.filter((movie) => movie.directorId === parent.id);
        return Movies.find({ directorId: parent.id });
      },
    },
  }),
});

const Query = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getMovie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(_parent, args) {
        // return movies.find((movie) => movie.id == args.id);
        return Movies.findById(args.id);
      },
    },
    getMoviesList: {
      type: new GraphQLList(MovieType),
      resolve(_parent, _args) {
        // return movies;
        return Movies.find({});
      },
    },
    getDirector: {
      type: DirectorType,
      args: { id: { type: GraphQLID } },
      resolve(_parent, args) {
        // return directors.find((director) => director.id == args.id);
        return Directors.findById(args.id);
      },
    },
    getDirectorsList: {
      type: new GraphQLList(DirectorType),
      resolve(_parent, _args) {
        // return directors;
        return Directors.find({});
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
