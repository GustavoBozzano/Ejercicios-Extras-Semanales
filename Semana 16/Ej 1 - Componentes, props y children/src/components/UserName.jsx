/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import PropTypes from 'prop-types';
import React from 'react';

const UserName = ({ name, isMinor }) => {
  return (
    <>
      <h3>{name}</h3>
      {isMinor && <span> Es Menor de Edad</span>}
    </>
  );
};

UserName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserName;
