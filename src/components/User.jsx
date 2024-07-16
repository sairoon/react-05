import React from "react";

const User = ({ user, handleUserDelete }) => {
  const { id, userName } = user;
  const handleDelete = (id) => {
    handleUserDelete(id);
  };
  return (
    <>
      <div className="bg-white px-3 py-2 shadow-lg rounded-lg">
        <p className="font-semibold text-base"># {id}</p>
        <hr />
        <p className="font-bold text-lg mt-1">{userName}</p>
        <div className="flex">
          <button
            onClick={() => handleDelete(id)}
            className="bg-red-600 hover:bg-red-500 mt-1 px-3 py-1 rounded-md text-white ms-auto"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default User;
