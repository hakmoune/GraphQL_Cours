import { useMutation } from "@apollo/client";
import { MUTATION_DELETE_USER } from "../../graphql/mutations/userMutations";
import { QUERY_ALL_USERS } from "../../graphql/queries/usersQueries";

export default function DeleteUser({ user }) {
  const [deleteUser, { loading, error }] = useMutation(MUTATION_DELETE_USER, {
    refetchQueries: [
      {
        query: QUERY_ALL_USERS,
      },
    ],
  });

  return (
    <>
      <button
        onClick={() => deleteUser({ variables: { id: user.id } })}
        disabled={loading}
      >
        {loading ? "Deleting..." : "Delete"}
      </button>
      {error && <p>Error creating user: {error.message}</p>}
    </>
  );
}
