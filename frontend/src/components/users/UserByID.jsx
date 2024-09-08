import { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER_BY_ID } from "../../graphql/queries/usersQueries";

export default function UserByID() {
  const [idUser, setIdUser] = useState("");

  const { data } = useQuery(QUERY_USER_BY_ID, {
    variables: {
      id: idUser,
    },
    skip: !idUser, // skips the query if idUser is empty, preventing unnecessary requests.
  });
  return (
    <>
      <h1>Get User By ID</h1>
      <div>
        <input
          type="text"
          value={idUser}
          onChange={(e) => setIdUser(e.target.value)}
          placeholder="Enter the user ID"
        />
        {data && <h3>{data.user.name}</h3>}
      </div>
    </>
  );
}
