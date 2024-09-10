import { useQuery, NetworkStatus } from "@apollo/client";
import { QUERY_ALL_USERS } from "../../graphql/queries/usersQueries";
import User from "./User";

export default function Users() {
  const { loading, error, data, networkStatus } = useQuery(QUERY_ALL_USERS, {
    pollInterval: 100000,
    notifyOnNetworkStatusChange: true,
  });

  if (networkStatus === NetworkStatus.poll) return <div>Refetching...</div>;
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
