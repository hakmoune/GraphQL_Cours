import { gql } from "@apollo/client";
import { MOVIE_DETAILS } from "../fragements/movieFragments";

export const QUERY_ALL_MOVIES = gql`
  query Movies {
    movies {
      ...MovieDetails
    }
  }
  ${MOVIE_DETAILS}
`;

export const QUERY_MOVIE_BY_NAME = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      ...MovieDetails
    }
  }
  ${MOVIE_DETAILS}
`;
