import { useState } from "react";
import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";

const USER_DETAILS = gql`
  fragment UserDetails on User {
    id
    name
    friends {
      name
    }
  }
`;

const MOVIE_DETAILS = gql`
  fragment MovieDetails on Movie {
    id
    name
    yearOfPublication
  }
`;

const QUERY_ALL_USERS = gql`
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

const QUERY_USER_BY_ID = gql`
  query User($id: ID!) {
    user(id: $id) {
      ...UserDetails
    }
  }
  ${USER_DETAILS}
`;

const MUTATION_CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      ...UserDetails
    }
  }
  ${USER_DETAILS}
`;

const MUTATION_DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      ...UserDetails
    }
  }
  ${USER_DETAILS}
`;

const QUERY_ALL_MOVIES = gql`
  query Movies {
    movies {
      ...MovieDetails
    }
  }
  ${MOVIE_DETAILS}
`;

const QUERY_MOVIE_BY_NAME = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      ...MovieDetails
    }
  }
  ${MOVIE_DETAILS}
`;

function Users() {
  const [createUserInputs, setCreateUserInputs] = useState({
    username: "",
    name: "",
    age: 0,
  });

  const [createUser] = useMutation(MUTATION_CREATE_USER, {
    refetchQueries: [
      {
        query: QUERY_ALL_USERS,
      },
    ],
  });

  const [deleteUser] = useMutation(MUTATION_DELETE_USER, {
    refetchQueries: [
      {
        query: QUERY_ALL_USERS,
      },
    ],
  });

  const [serachMovie, setSearchMovie] = useState("");
  const [idUser, setIdUser] = useState("");

  const { loading, error, data, refetch } = useQuery(QUERY_ALL_USERS);
  const { data: moviesData } = useQuery(QUERY_ALL_MOVIES);
  const [fetchMovie, { data: searchMovieData, error: searchMovieError }] =
    useLazyQuery(QUERY_MOVIE_BY_NAME);

  const { data: dataUserByID } = useQuery(QUERY_USER_BY_ID, {
    variables: {
      id: idUser,
    },
    skip: !idUser, // skips the query if idUser is empty, preventing unnecessary requests.
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (searchMovieError) console.error("Error", searchMovieError);
  console.log(data);

  return (
    <div>
      <ul>
        {data.users.users ? (
          data.users?.users?.map((user) => (
            <li style={{ listStyle: "none" }} key={user.id}>
              {user.name}{" "}
              <button
                onClick={() => deleteUser({ variables: { id: user.id } })}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>{data.users.message}</p>
        )}
      </ul>

      <div>
        <h1>Add New User</h1>
        <div>
          <input
            type="text"
            placeholder="Name..."
            value={createUserInputs.name}
            onChange={(e) =>
              setCreateUserInputs({
                ...createUserInputs,
                name: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Username..."
            value={createUserInputs.username}
            onChange={(e) =>
              setCreateUserInputs({
                ...createUserInputs,
                username: e.target.value,
              })
            }
          />
          <input
            type="number"
            placeholder="Age..."
            value={createUserInputs.age}
            onChange={(e) =>
              setCreateUserInputs({
                ...createUserInputs,
                age: Number(e.target.value),
              })
            }
          />
          <button
            onClick={() => {
              createUser({ variables: { input: createUserInputs } });
              //refetch();
            }}
          >
            Create user
          </button>
        </div>
      </div>

      <h1>List Movies</h1>
      <ul>
        {moviesData &&
          moviesData.movies?.map((movie) => (
            <li style={{ listStyle: "none" }} key={movie.id}>
              {movie.name}
            </li>
          ))}
      </ul>

      <div>
        <input
          type="text"
          placeholder="Entre your movie..."
          value={serachMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
        />
        <button
          onClick={() => fetchMovie({ variables: { name: serachMovie } })}
        >
          Search Movie
        </button>
        {searchMovieData && (
          <h3>
            {searchMovieData.movie.name}{" "}
            {searchMovieData.movie.yearOfPublication}{" "}
          </h3>
        )}
        {searchMovieError && <h3>There was an error fetching data</h3>}
      </div>
      <h1>Get User By ID</h1>
      <div>
        <input
          type="text"
          value={idUser}
          onChange={(e) => setIdUser(e.target.value)}
          placeholder="Enter the user ID"
        />
        {dataUserByID && <h3>{dataUserByID.user.name}</h3>}
      </div>
    </div>
  );
}

export default Users;
