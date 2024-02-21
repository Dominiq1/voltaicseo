import React, { useEffect } from 'react';
import solarHouseImage from '../images/solar.jpg'; // Adjust the path as necessary
import '../styles/leadIntake.css'; // Adjust the path based on your file structure
import '../styles/global.css';

const Stella = ({ slug }) => {
  // Styles for the hero section that includes the background image
  const heroSectionStyles = {
    display: 'flex',
    justifyContent: 'center', // Center children horizontally
    alignItems: 'center', // Center children vertically
    position: 'relative',
    backgroundImage: `url(${solarHouseImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: slug === 'Home' ? '40em' : '50em', // Adjust based on the slug prop
    padding: '4rem 1rem',
    width: '100%',
    zIndex: 1,
  };

  const titleStyle = {
    color: 'white', // Choose a color that stands out against the overlay
    fontSize: '2em', // Adjust the size as needed
    textAlign: 'center', // Center the text
    fontWeight: 'bold', // Make it bold
    marginBottom: '2rem', // Space between the title and the widget
    zIndex: 3, // Ensure the title is above the overlay
    position: 'relative', // Position relative to its normal position
  };

  const subTitleStyle = {
    color: 'white', // Choose a color that stands out against the overlay
    fontSize: '1em', // Adjust the size as needed
    textAlign: 'center', // Center the text
    fontWeight: 'light', // Make it bold
    marginBottom: '2rem', // Space between the title and the widget
    zIndex: 3, // Ensure the title is above the overlay
    position: 'relative', // Position relative to its normal position
  };


  // Styles for the overlay to darken the background image
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better widget visibility
    zIndex: 2, // Ensure the overlay is below the widget
  };

  // Styles to center the widget container
  const widgetContainerStyle = {
    position: 'relative', // Positioned relative to its normal position
    zIndex: 3, // Ensure the widget is above the overlay
  };

  useEffect(() => {
    // Create a script element to load the widget JavaScript
    const script = document.createElement('script');
    script.src = "https://stella.demand-iq.com/widget-address/voltaic-construction.estimate.demand-iq.com/";
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section style={heroSectionStyles}>
      <div style={overlayStyle}></div>
      
      <div style={widgetContainerStyle}>
          {/* Title container */}
      <div style={titleStyle}>Start Your Solar Journey & Stay protected</div>
     
      <div style={subTitleStyle}>View Solar on Your Home Now!</div>
        {/* Widget container */}
        <div className="demand-iq-stella-widget" data-utm-content=""></div>
      </div>
    </section>
  );
};

export default Stella;
