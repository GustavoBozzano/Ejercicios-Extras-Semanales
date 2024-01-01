import React from "react";

const UserLocation = ({ location }) => {
  return (
    <>
      <p>{`País: ${location.country} // Ciudad: ${location.city}`}</p>
    </>
  );
};

export default UserLocation;
