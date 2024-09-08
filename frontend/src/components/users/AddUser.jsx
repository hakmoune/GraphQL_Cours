import { useState } from "react";
import { useMutation } from "@apollo/client";
import { MUTATION_CREATE_USER } from "../../graphql/mutations/userMutations";
import { QUERY_ALL_USERS } from "../../graphql/queries/usersQueries";

export default function AddUser() {
  const [createUserInputs, setCreateUserInputs] = useState({
    username: "",
    name: "",
    age: 0,
  });

  const [createUser, { loading, error }] = useMutation(MUTATION_CREATE_USER, {
    refetchQueries: [
      {
        query: QUERY_ALL_USERS,
      },
    ],
  });

  return (
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
          }}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create User"}
        </button>
        {error && <p>Error creating user: {error.message}</p>}
      </div>
    </div>
  );
}
