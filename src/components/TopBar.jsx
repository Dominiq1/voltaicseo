import React from 'react';
import '../styles/TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="phone-number">
        <a href="tel:9099945730">📞 (909) 994-5730</a> {/* Unicode telephone symbol */}
      </div>
    </div>
  );
};

export default TopBar;

