import React from 'react';
import '../styles/TopBar.css';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="phone-number">
      <FontAwesomeIcon icon={faPhone} /> (323) 900-5361
      </div>
    </div>
  );
};

export default TopBar;

