const { gql } = require("apollo-server");

const typeDefs = gql`
  type UsersSuccessfulResult {
    users: [User!]!
  }
  type UsersErrorResult {
    message: String!
  }
  union UsersResult = UsersSuccessfulResult | UsersErrorResult

  type Query {
    #users: [User!]!
    users: UsersResult
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    deleteUser(id: ID!): [User!]!
    updateUserName(input: UpdateUserNameInput!): User!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: String
    gendre: Gendre = UNKNOWN
  }

  input UpdateUserNameInput {
    id: ID!
    username: String!
  }

  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String
    gendre: Gendre!
    friends: [User]
    favoritMovies: [Movie]
  }

  enum Gendre {
    MALE
    FEMALE
    UNKNOWN
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheathers: Boolean!
  }
`;

module.exports = {
  typeDefs,
};
