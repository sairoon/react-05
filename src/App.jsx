import { useState } from "react";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      userName: "test",
    },
    {
      id: 2,
      userName: "test_2",
    },
    {
      id: 3,
      userName: "test_3",
    },
    {
      id: 4,
      userName: "test_4",
    },
    {
      id: 5,
      userName: "test_5",
    },
  ]);

  const handleUserDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
    // setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <Users users={users} handleUserDelete={handleUserDelete} />
    </>
  );
}

export default App;
