import React from "react";

import User from "./User/User";

const UserList = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <User key={user.email} user={user} />
      ))}
    </>
  );
};

export default UserList;
