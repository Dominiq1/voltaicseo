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
    flexDirection: isDesktop ? 'row' : 'column',
    alignItems: isDesktop ? 'flex-start' : 'center',
    padding: '20px',
    textAlign: isDesktop ? 'left' : 'center'
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: isDesktop ? '0' : '20px',
    marginRight: isDesktop ? '20px' : '0',
  };

  const contentStyle = {
    maxWidth: '500px',
  };

  const callToActionStyle = {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: 'black',
    color: 'white',
    cursor: 'pointer',
    marginTop: '20px',
    borderRadius: '4px',
    outline: 'none',
    transition: 'background-color 0.3s',
  };

  return (
    <div style={containerStyle}>
      <img src={imageSrc} alt="Promotional material" style={imageStyle} />
      <div style={contentStyle}>
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button
          style={callToActionStyle}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#333')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'black')}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CTA1;
