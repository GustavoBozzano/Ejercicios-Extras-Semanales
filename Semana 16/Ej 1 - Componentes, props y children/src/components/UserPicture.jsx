/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const UserPicture = ({ picture }) => {
  return (
    <>
      <img src={picture.large} alt="User" />
    </>
  );
};
UserPicture.propTypes = {
  picture: PropTypes.object.isRequired,
};

export default UserPicture;
