import React, { useState, useEffect } from 'react';
import backgroundImage from '../../images/safeclean.webp'; // Replace with path to your image

const Safety = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth < 768;

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    background: isMobile
      ? `url(${backgroundImage}) center center / cover no-repeat`
      : 'none', // Apply background image only for mobile
    position: 'relative',
  };

  const textStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    maxWidth: '80%',
    textAlign: 'center',
    zIndex: 2, // Ensures text is above the background
  };

  const backgroundStyle = isMobile ? {} : {
    backgroundImage: `url(${backgroundImage})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1, // Ensure the background is behind the text
  };

  return (
    <div style={sectionStyle}>
      {!isMobile && <div style={backgroundStyle}></div>} {/* Background for desktop */}
      <div style={textStyle}>
        <h1>Supplies: Safe & Effective</h1>
        <p>We make sure everything we use to clean your home does just that — without any damage to your items.</p>
        <p>We've tested hundreds of products to bring the highest level of clean to your home, while still being safe for the environment.</p>
      </div>
    </div>
  );
};

export default Safety;
