import React from "react";
import User from "./User";

const Users = ({ users, handleUserDelete }) => {
  return (
    <div className="container grid grid-cols-3 gap-3 mt-8 bg-slate-300 px-3 py-3 rounded-md">
      {users.map((user, index) => (
        <User user={user} key={index} handleUserDelete={handleUserDelete} />
      ))}
    </div>
  );
};

export default Users;
