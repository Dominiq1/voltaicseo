import React, { useState } from 'react';
import { Link } from 'gatsby';
import logo from '../images/voltaiclogo.png';

const NavigationBar = () => {
  const [menuState, setMenuState] = useState({
    isMenuOpen: false,
    activeMenu: 'main',
  });

  const menuItems = {
    main: [
      { name: 'Products', submenu: 'products' },
      { name: 'Learn', submenu: 'learn' },
      { name: 'Company', link: '/company' },
    ],
    products: [
      { name: 'Solar Panels', link: '/intro-to-solar-panels-for-homeowners' },
      { name: 'Battery Storage', link: '/solar-battery-storage-homeowners-guide' },
      { name: 'Tesla Powerwall', link: '/tesla-powerwall-home-battery' },
      { name: 'EV Charging', link: '/ev-charging-guide' },
    ],
    learn: [
      { name: 'Why Solar', link: '/why-go-solar' },
      { name: 'Solar Education', link: '/discover-solar-power' },

    ],
  };

  const toggleMenu = () => {
    setMenuState(prevState => ({
      ...prevState,
      isMenuOpen: !prevState.isMenuOpen,
      activeMenu: 'main',
    }));
  };

  const navigateToMenu = (submenu) => {
    setMenuState(prevState => ({
      ...prevState,
      activeMenu: submenu,
    }));
  };

  const renderMenuItems = (items) => {
    return (
      <>
        {menuState.activeMenu !== 'main' && (
          <div style={{...menuItemStyles, borderBottom: '1px solid #cccccc'}}>
            <button onClick={() => navigateToMenu('main')} style={{ color: 'white', background: 'none', border: 'none', fontWeight: 'bold' }}>&lt; Back</button>
          </div>
        )}
        {items.map((item, index) => (
          <div key={index} style={{...menuItemStyles, borderBottom: index !== items.length - 1 ? '1px solid #cccccc' : 'none'}}>
            {item.link ? (
              <Link to={item.link} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>{item.name}</Link>
            ) : (
              <span onClick={() => navigateToMenu(item.submenu)} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>{item.name}</span>
            )}
          </div>
        ))}
        {menuState.activeMenu === 'main' && (
          <div style={{...menuItemStyles, borderTop: '1px solid #cccccc', display: 'flex', flexDirection: 'column'}}>
            {/* <div style={{ color: 'white', fontWeight: 'bold' }}>State: California</div>
            <div style={{ color: 'white', fontWeight: 'bold' }}>(833) 324-5886</div> */}
          </div>
        )}
      </>
    );
  };

  return (
    <nav style={navigationBarStyles}>
      <Link to='/'>
     
      <img src={logo} alt="Company Logo" style={{ height: '3em' }} />
      </Link>
      <button onClick={toggleMenu} style={menuButtonStyles}>&#9776;</button>
      {menuState.isMenuOpen && (
        <div style={menuOpenStyles}>
          <button onClick={toggleMenu} style={closeButtonStyles}>&times;</button>
          {renderMenuItems(menuItems[menuState.activeMenu])}
        </div>
      )}
    </nav>
  );
};

const navigationBarStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#D6EAF8',
  padding: '1rem',
  color: 'white',
};

const menuButtonStyles = {
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'white',
  fontSize: '2rem',
};

const menuOpenStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.95)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '3rem 1rem',
  zIndex: 100,
  overflowY: 'auto',
};

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

const menuItemStyles = {
  width: '100%',
  padding: '1.5rem 0',
  textAlign: 'left',
  fontSize: '1.5rem',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  fontWeight: 'bold', // Add fontWeight here
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
