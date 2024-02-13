import React, { useState } from 'react';

const Accordion = ({ title, isActive, onClick, children }) => {
  const [isOpen, setIsOpen] = useState(isActive);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
