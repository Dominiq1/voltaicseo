// src/components/layout.js

import React from 'react';
import NavigationBar from './NavigationBar'; // Make sure to import the NavigationBar
import { Helmet } from 'react-helmet';
const Layout = ({ children, isFullWidth }) => {
  return (

    <>

<Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Default Title</title>
        <style type="text/css">{`
          html, body {
            margin: 0;
            padding: 0;
            /* Insert additional global styles here */
          }
          *, *::before, *::after {
            box-sizing: border-box;
            /* Insert additional global styles here */
          }
        `}</style>
      </Helmet>

    
    

    <div style={{ margin: '0 auto', maxWidth: isFullWidth ? '100%' : '960px', padding: '0 1rem' }}>

      <main style={{ width: '100%' }}>{children}</main>
      <footer style={{ width: '100%' }}>
        {/* Footer content goes here */}
        © {new Date().getFullYear()}, Your Site Name
      </footer>
    </div>


    </>
  );
};

export default Layout;
