import React, { useState, useEffect } from 'react';
import backgroundImage from '../../images/LivingRoom.webp'; // Replace with path to your image
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FormComponent = () => {
    const [inputValue, setInputValue] = useState('');
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
      console.log(`Form submitted with input: ${inputValue}`);
      // You would typically send this data to a server here
    };
  
    const formStyle = {
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '40px',
     boxSizing: 'border-box',
      height: '100%',
    };
  
    const headerStyle = {
      color: '#333', // Darker text color for the heading
      marginBottom: '0.5em',
    };
  
    const subTextStyle = {
      color: '#666', // Lighter text color for subtext
      marginBottom: '1.5em',
    };
  
    const phoneNumberStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginBottom: '1.5em',
    };
  
    const phoneIconStyle = {
      marginRight: '10px',
    };
  
    const buttonStyle = {
      backgroundColor: '#000', // Black background for button
      color: '#fff', // White text color for button
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
    };
  
    return (
      <div style={formStyle}>
        <h1 style={headerStyle}>Home Cleaning Made Easy.</h1>
        <p style={subTextStyle}>Our team is fully-insured, background checked, and expertly trained.</p>
        <div style={phoneNumberStyle}>
          <FontAwesomeIcon icon={faPhone}/>
           <span>(619) 350-0925</span>
        </div>
        <button style={buttonStyle}>Book Now. Pay Later</button>
        {/* <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '20px' }}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            style={{ padding: '10px', marginBottom: '10px', width: '100%' }}
            placeholder="Enter your details"
          />
          <button type="submit" style={{ padding: '10px', width: '100%' }}>
            Submit
          </button>
        </form> */}
      </div>
    );
  };
  
const SplitScreenWithForm = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set up the resize event listener
    window.addEventListener('resize', handleResize);

    // Call the handleResize function to set the initial value
    handleResize();

    // Remove the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const splitScreenStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    minHeight: '100%',
    width: '100vw',
    alignContent: 'stretch',
  };

  const imageSideStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: isMobile ? '100%' : '50%',
    height: isMobile ? '25em' : '90vh',
    order: isMobile ? '-1' : '0', // Ensure the image is above the form on mobile
  };

  const formContainerStyle = {
    width: isMobile ? '100%' : '50%',
    height: isMobile ? '25em' : '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  };

  return (
    <div style={splitScreenStyle}>
      <div style={imageSideStyle}></div>
      <div style={formContainerStyle}>
        <FormComponent />
      </div>
    </div>
  );
};

export default SplitScreenWithForm;
