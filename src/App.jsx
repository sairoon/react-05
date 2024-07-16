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
      userName: "test2",
    },
  ]);

  return (
    <>
      <Users users={users} />
    </>
  );
}

export default App;
