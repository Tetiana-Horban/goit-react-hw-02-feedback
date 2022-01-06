import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NotificationMessage = styled.p`
  font-size: 25px;
  text-align: center;
  color: #7e5a17;
`;

const Notification = ({ message }) => {
  return <NotificationMessage>{message}</NotificationMessage>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
