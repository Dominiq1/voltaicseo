import React, { useState } from 'react';
import { Link } from 'gatsby';
import logo from '../images/voltaiclogo.png';
import '../styles/navigation.css'; // Importing the navigation styles


const NavigationBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <img src={logo} alt="Company Logo" />
      <button onClick={() => setMenuOpen(!isMenuOpen)}>☰</button>
      <div className={isMenuOpen ? "menu-responsive" : ""}>
        <Link to="/" className="navigation-link">Home</Link>
        <Link to="/about" className="navigation-link">About</Link>
        <Link to="/services" className="navigation-link">Services</Link>
        <Link to="/contact" className="navigation-link">Contact</Link>
      </div>
    </nav>
  );
};

export default NavigationBar;




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
