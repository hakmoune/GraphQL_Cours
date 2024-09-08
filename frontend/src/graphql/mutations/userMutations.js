import { gql } from "@apollo/client";
import { USER_DETAILS } from "../fragements/usersFragments";

export const MUTATION_CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      ...UserDetails
    }
  }
  ${USER_DETAILS}
`;

export const MUTATION_DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      ...UserDetails
    }
  }
  ${USER_DETAILS}
`;
