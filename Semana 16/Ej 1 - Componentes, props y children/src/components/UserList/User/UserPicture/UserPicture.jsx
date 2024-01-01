import React from "react";

const UserPicture = ({ picture, isMinor }) => {
  return (
    <>
      <img src={picture.medium} alt="User" />
      {isMinor && <span>Es Menor de Edad</span>}
    </>
  );
};

export default UserPicture;
