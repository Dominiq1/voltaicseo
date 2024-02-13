import React, { useState } from 'react';
import { Link } from 'gatsby';
import logo from '../images/voltaiclogo.png';

const NavigationBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  // Styles for the close button inside the menu
  const closeButtonStyles = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1.5em',
    cursor: 'pointer',
  };

  // Styles for the hamburger menu button
  const menuButtonStyles = {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '2rem',
  };

  // Styles when the menu is closed
  const menuClosedStyles = {
    display: 'none',
  };

  // Styles when the menu is open
  const menuOpenStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.9)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.3s ease-in-out',
    transform: 'translateX(0)', // Menu slides in
    zIndex: 100,
  };

  // Styles for navigation links
  const navigationLinkStyles = {
    display: 'block',
    margin: '1rem 0',
    color: 'white', // Assuming you want white text for the links
    textDecoration: 'none', // Removes underline from links
    fontSize: '1.2rem', // Example size, adjust as needed
    // Add hover, focus, or other styles as needed
  };

  // Styles for the navigation bar itself
  const navigationBarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'teal',
    padding: '1rem',
    color: 'white',
  };

  return (
    <nav style={navigationBarStyles}>
      <img src={logo} alt="Company Logo" style={{ height: '3em' }} />
     
     
      {/* Hamburger unicode :  <button onClick={toggleMenu} style={menuButtonStyles}>
        &#9776; 
      </button> */}



      
      <div style={isMenuOpen ? menuOpenStyles : menuClosedStyles}>
        <button onClick={() => setMenuOpen(false)} style={closeButtonStyles}>&times;</button>
        <Link to="/" onClick={() => setMenuOpen(false)} style={navigationLinkStyles}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)} style={navigationLinkStyles}>About</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)} style={navigationLinkStyles}>Services</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)} style={navigationLinkStyles}>Contact</Link>
      </div>
    </nav>
  );
};

export default NavigationBar;



/// Old Version: 

// import React, { useState } from 'react';

// // Other imports remain the same

// const NavigationBar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav style={navigationBarStyles}>
//       <img src={logo} alt="Company Logo" style={{ height: '3em' }} />
//       <button
//         onClick={() => setMenuOpen(!isMenuOpen)}
//         style={{
//           backgroundColor: 'transparent',
//           border: 'none',
//           color: '#fff',
//           fontSize: '2rem',
//           cursor: 'pointer',
//         }}
//       >
//         ☰
//       </button>
//       <div style={{ display: isMenuOpen ? 'block' : 'none', textAlign: 'center' }}>
//         <Link to="/" style={navigationLinkStyles}>Home</Link>
//         <Link to="/about" style={navigationLinkStyles}>About</Link>
//         <Link to="/services" style={navigationLinkStyles}>Services</Link>
//         <Link to="/contact" style={navigationLinkStyles}>Contact</Link>
//       </div>
//     </nav>
//   );
// };
