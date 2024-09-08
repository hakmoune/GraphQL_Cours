import { gql } from "@apollo/client";

export const USER_DETAILS = gql`
  fragment UserDetails on User {
    id
    name
    friends {
      name
    }
  }
`;
