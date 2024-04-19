/* eslint-disable react/prop-types */

import propTypes from 'prop-types';
import UserPicture from './UserPicture';
import UserName from './UserName';
import UserLocation from './UserLocation';

const User = ({ user }) => {
  return (
    <li>
      <UserPicture picture={user.picture} />
      <UserName
        name={`${user.name.first} ${user.name.last}`}
        isMinor={user.dob.age < 18}
      />
      <UserLocation
        location={`País: ${user.location.country} // Ciudad: ${user.location.city}`}
      />
    </li>
  );
};

User.prototype = {
  user: propTypes.object.isRequired,
};

export default User;
