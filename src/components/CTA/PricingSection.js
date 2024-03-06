import React, { useState, useEffect } from 'react';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const PricingOption = ({ title, startingPrice, duration, description }) => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  
  const cardStyles = {
    padding: '20px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align text to the left
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const priceStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '15px',
  };

  const durationStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.9rem',
    marginBottom: '15px',
  };

  const descriptionStyle = {
    fontSize: '0.9rem',
    lineHeight: '1.5',
  };

  return (
    <div style={{ ...cardStyles, width: isMobile ? '100%' : 'auto' }}>
      <h3 style={titleStyle}>{title}</h3>
      <h2 style={priceStyle}>Starting at {startingPrice}</h2>
      <div style={durationStyle}>
        <FontAwesomeIcon icon={faClock} style={{ marginRight: '10px' }} />
        <span>{duration}</span>
      </div>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

const PricingSection = () => {
  const sectionStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap', // ensures responsiveness
    padding: '20px',
    backgroundColor: '#f5f5f5',
  };

  return (
    <div style={sectionStyles}>
      <PricingOption 
        title="Standard Cleaning" 
        startingPrice="$199" 
        duration="50 min" 
        description="Perfect for regular cleaning to keep your home fresh and tidy. Ideal for busy individuals." 
      />
      <PricingOption 
        title="Deep Clean" 
        startingPrice="$349" 
        duration="50 min" 
        description="Thorough cleaning that covers more areas with attention to detail. Great for a seasonal refresh." 
      />
      <PricingOption 
        title="Move Out/In Clean" 
        startingPrice="$375" 
        duration="50 min" 
        description="Comprehensive cleaning for when you are changing homes. Ensures a spotless space for new beginnings." 
      />
    </div>
  );
};

export default PricingSection;
