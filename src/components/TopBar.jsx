import React from 'react';
import '../styles/TopBar.css';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="phone-number">
        <FontAwesomeIcon icon={faPhone} />
        <a href="tel:+13239005361">(323) 900-5361</a>
      </div>
    </div>
  );
};

export default TopBar;
