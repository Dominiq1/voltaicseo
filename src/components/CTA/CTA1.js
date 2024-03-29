import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';

const useResponsiveLayout = (breakpoint) => {
  // Initialize state with undefined to match server-side rendering
  const [isDesktop, setIsDesktop] = useState(typeof window !== "undefined" ? window.innerWidth > breakpoint : undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setIsDesktop(window.innerWidth > breakpoint);
      window.addEventListener('resize', handleResize);
      // Call handleResize immediately to set the initial state correctly
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [breakpoint]);

  return isDesktop;
};

const CTA1 = ({ imageSrc, title, description, features, buttonText, link }) => {
  const isDesktop = useResponsiveLayout(768);

  const containerStyle = {
    display: 'flex',
    flexDirection: isDesktop ? 'row' : 'column', // Adjust based on isDesktop state
    alignItems: 'flex-start',
    padding: '20px',
    textAlign: 'left',
    backgroundColor: 'black',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
  };

  const contentStyle = {
    maxWidth: '500px',
    color: 'white',
  };

  const callToActionStyle = {
    padding: '10px 20px',
    border: '1px solid white',
    backgroundColor: 'transparent',
    color: 'white',
    cursor: 'pointer',
    marginTop: '20px',
    borderRadius: '4px',
    outline: 'none',
    transition: 'all 0.3s',
  };

  const listStyle = {
    listStyleType: 'none', // remove default list bullets
    paddingLeft: 0, // remove default padding
  };

  const bulletPointStyle = {
    color: 'white', // bullet color
    marginRight: '10px', // space between bullet and text
  };

  const listItemStyle = {
    marginBottom: '5px', // space between items
    display: 'flex',
    alignItems: 'center', // align bullet and text
  };

  return (
    <div style={containerStyle}>
      <img src={imageSrc} alt="Promotional material" style={imageStyle} />
      <div style={contentStyle}>
        <h1>{title}</h1>
        <p>{description}</p>
        <ul style={listStyle}>
          {features.map((feature, index) => (
            <li key={index} style={listItemStyle}>
              <span style={bulletPointStyle}>•</span>
              {feature}
            </li>
          ))}
        </ul>
        <Link to={link}>
          <button
            style={callToActionStyle}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#333')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CTA1;
