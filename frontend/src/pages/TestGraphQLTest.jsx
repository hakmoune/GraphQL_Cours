import Users from "../components/users/Users";
import AddUser from "../components/users/AddUser";
import UserByID from "../components/users/UserByID";
import Movies from "../components/movies/Movies";
import SearchMovie from "../components/movies/SearchMovie";

function TestGraphQLTest() {
  return (
    <>
      <Users />
      <AddUser />
      <Movies />
      <SearchMovie />
      <UserByID />
    </>
  );
}

export default TestGraphQLTest;
