import { gql } from "@apollo/client";

export const MOVIE_DETAILS = gql`
  fragment MovieDetails on Movie {
    id
    name
    yearOfPublication
  }
`;
