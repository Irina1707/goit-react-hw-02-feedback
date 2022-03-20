import React from 'react';
import PropTypes from 'prop-types';
import { } from './Notification.styled';

const Notification = ({ message }) => (
    <div>
        <p>{message}</p>
    </div>

)
Notification.propTypes = {
   message: PropTypes.string.isRequired, 
}

export default Notification;