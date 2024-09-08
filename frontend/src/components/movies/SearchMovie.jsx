import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { QUERY_MOVIE_BY_NAME } from "../../graphql/queries/moviesQueries";

export default function () {
  const [serachMovie, setSearchMovie] = useState("");

  const [fetchMovie, { data, error }] = useLazyQuery(QUERY_MOVIE_BY_NAME);

  if (error) console.error("Error", error);

  return (
    <div>
      <input
        type="text"
        placeholder="Entre your movie..."
        value={serachMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
      />
      <button onClick={() => fetchMovie({ variables: { name: serachMovie } })}>
        Search Movie
      </button>
      {data && (
        <h3>
          {data.movie.name} {data.movie.yearOfPublication}{" "}
        </h3>
      )}
      {error && <h3>There was an error fetching data</h3>}
    </div>
  );
}
