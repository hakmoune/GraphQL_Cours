import { gql } from "@apollo/client";
import { USER_DETAILS } from "../fragements/usersFragments";

export const QUERY_ALL_USERS = gql`
  query Users {
    users {
      ... on UsersSuccessfulResult {
        users {
          ...UserDetails
        }
      }
      ... on UsersErrorResult {
        message
      }
    }
  }
  ${USER_DETAILS}
`;

export const QUERY_USER_BY_ID = gql`
  query User($id: ID!) {
    user(id: $id) {
      ...UserDetails
    }
  }
  ${USER_DETAILS}
`;
