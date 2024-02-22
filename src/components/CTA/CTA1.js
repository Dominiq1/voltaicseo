import React, { useState, useEffect } from 'react';

const useResponsiveLayout = (breakpoint) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > breakpoint);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isDesktop;
};

const CTA1 = ({ imageSrc, title, description, features, buttonText }) => {
  const isDesktop = useResponsiveLayout(768);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
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
        <button
          style={callToActionStyle}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#333')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CTA1;
