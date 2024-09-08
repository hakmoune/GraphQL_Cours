import { useQuery } from "@apollo/client";
import { QUERY_ALL_USERS } from "../../graphql/queries/usersQueries";
import User from "./User";

export default function Users() {
  const { loading, error, data } = useQuery(QUERY_ALL_USERS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>List of Users.</h1>
      <ul>
        {data.users.users ? (
          data.users?.users?.map((user) => <User user={user} key={user.id} />)
        ) : (
          <p>{data.users.message}</p>
        )}
      </ul>
    </div>
  );
}
