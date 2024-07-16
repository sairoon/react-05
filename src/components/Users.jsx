import React from "react";

const Users = ({ users }) => {
  return (
    <>
      {users.map((item, index) => (
        <div className="container" key={index}>
          <p>{item.userName}</p>
        </div>
      ))}
    </>
  );
};

export default Users;
