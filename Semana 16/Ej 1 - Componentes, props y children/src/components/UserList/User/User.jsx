import React from "react";

import UserPicture from "./UserPicture/UserPicture";
import UserName from "./UserName/UserName";
import UserLocation from "./UserLocation/UserLocation";

const User = ({ user }) => {
  return (
    <>
      <UserPicture picture={user.picture} isMinor={user.dob.age < 18} />
      <UserName name={user.name} />
      <UserLocation location={user.location} />
    </>
  );
};

export default User;
