import React from "react";

const UserName = ({ name }) => {
  return (
    <>
      <h3>{`${name.first}, ${name.last}`}</h3>
    </>
  );
};

export default UserName;
