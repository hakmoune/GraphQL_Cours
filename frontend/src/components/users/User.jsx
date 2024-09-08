import React from "react";
import DeleteUser from "./DeleteUser";

export default function User({ user }) {
  return (
    <li style={{ listStyle: "none" }}>
      {user.name} <DeleteUser user={user} />
    </li>
  );
}
