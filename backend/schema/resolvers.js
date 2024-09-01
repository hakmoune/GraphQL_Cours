const { usersList } = require("../data/users");
const { moviesList } = require("../data/movies");

const resolvers = {
  Query: {
    users: (parent, args, context, info) => {
      if (usersList) return { users: usersList };

      return { message: "Yo. there was an error" };
    },
    user: (_, args) => {
      return usersList.find((user) => user.id === Number(args.id));
    },
    movies: () => {
      return moviesList;
    },
    movie: (_, args) => {
      return moviesList.find((movie) => movie.name === args.name);
    },
  },
  User: {
    favoritMovies: (parent) => {
      return moviesList.filter(
        (movie) =>
          movie.yearOfPublication >= 2020 && movie.yearOfPublication <= 2024
      );
    },
  },

  Mutation: {
    createUser: (_, args) => {
      userCreated = {
        id: usersList.sort((a, b) => a.id - b.id)[usersList.length - 1].id + 1,
        ...args.input,
      };
      usersList.push(userCreated);
      return userCreated;
    },
    updateUserName: (_, args) => {
      let updatedUser;
      usersList.forEach((user) => {
        if (user.id === Number(args.input.id)) {
          user.username = args.input.username;
          updatedUser = user;
        }
      });
      return updatedUser;
    },
    deleteUser: (_, args) => {
      const index = usersList.findIndex((user) => user.id === Number(args.id));
      if (index !== -1) {
        usersList.splice(index, 1);
      }
      return usersList;
    },
  },

  UsersResult: {
    __resolveType(obj) {
      return obj.users
        ? "UsersSuccessfulResult"
        : obj.message
        ? "UsersErrorResult"
        : null;
    },
  },
};

module.exports = {
  resolvers,
};
