/* eslint-disable react/prop-types */

import User from './User';
import users from '../users.json';

const UserList = () => {
  return (
    <ul>
      {users.map((user) => {
        return <User key={user.login.uuid} user={user} />;
      })}
    </ul>
  );
};

export default UserList;
