import PropTypes from 'prop-types';

const UserLocation = ({ location }) => {
  return (
    <>
      <p>{location}</p>
    </>
  );
};

UserLocation.propTypes = {
  location: PropTypes.string.isRequired,
};

export default UserLocation;
