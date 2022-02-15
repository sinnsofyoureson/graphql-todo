const movies = [
  { id: "1", name: "Pulp Fiction", genre: "Crime", directorId: "1" },
  { id: "2", name: "1984", genre: "Sci-Fi", directorId: "2" },
  { id: "3", name: "V for vendetta", genre: "Sci-Fi-Triller", directorId: "3" },
  { id: "4", name: "Snatch", genre: "Crime-Comedy", directorId: "4" },
  { id: "5", name: "Reservoir Dogs", genre: "Crime", directorId: "1" },
  { id: "6", name: "The Hateful Eight", genre: "Crime", directorId: "1" },
  { id: "7", name: "Inglourious Basterds", genre: "Crime", directorId: "1" },
  {
    id: "8",
    name: "Lock, Stock and Two Smoking Barrels",
    genre: "Crime-Comedy",
    directorId: "4 ",
  },
];

const directors = [
  { id: "1", name: "Quentin Tarantino", age: 55 },
  { id: "2", name: "Michael Radford", age: 72 },
  { id: "3", name: "James McTeigue", age: 51 },
  { id: "4", name: "Guy Ritchie", age: 50 },
];

const todos = [
  {
    id: "1",
    task: "Learn GraphQL",
    completed: false,
    date: new Date("August 23, 1975 23:15:30").toISOString(),
  },
  {
    id: "2",
    task: "Learn React",
    completed: false,
    date: new Date("August 22, 1975 23:15:30").toISOString(),
  },
  {
    id: "3",
    task: "Learn Typescript",
    completed: false,
    date: new Date("August 21, 1975 23:15:30").toISOString(),
  },
  {
    id: "4",
    task: "Learn Javascript",
    completed: false,
    date: new Date("August 20, 1975 23:15:30").toISOString(),
  },
  {
    id: "5",
    task: "Take Over The World",
    completed: false,
    date: new Date("August 19, 1975 23:15:30").toISOString(),
  },
];

module.exports = { movies, directors, todos };
