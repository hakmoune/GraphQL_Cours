import { useQuery } from "@apollo/client";
import { QUERY_ALL_MOVIES } from "../../graphql/queries/moviesQueries";

export default function () {
  const { data } = useQuery(QUERY_ALL_MOVIES);

  return (
    <>
      <h1>List Movies</h1>
      <ul>
        {data &&
          data.movies?.map((movie) => (
            <li style={{ listStyle: "none" }} key={movie.id}>
              {movie.name}
            </li>
          ))}
      </ul>
    </>
  );
}
