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
            width: 100%;
            height: 100%;
         background-color: DeepPink;
          }
          *, *::before, *::after {
            box-sizing: border-box;
          }
          .footer {
            padding: 1rem 0;
            background-color: #333; // A darker background for the footer
            color: white; // Light text color for contrast
            text-align: center;
            font-size: 0.9rem;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
          }
        `}</style>
      </Helmet>
      <div style={{
        position: 'relative', // Make sure the parent div is positioned relatively
        minHeight: '100vh', // Minimum height to fill the screen vertically
        margin: '0 auto',
        maxWidth: isFullWidth ? '100%' : '960px',
        padding: isFullWidth ? '0' : '0 1rem',
        paddingBottom: '2.5rem', // Add padding at the bottom to account for the footer height
      }}>
        <main style={{ width: '100%' }}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

// Footer Component
const Footer = () => (
  <footer style={{
    backgroundColor: "#040e18",
    color: "#fff",
    padding: "1rem 0",
    textAlign: "center",
    position: 'relative', // Ensuring footer is at the bottom
    bottom: '0',
    left: '0',
    width: '100%', // Ensuring footer is full width
  }}>
    <p>© {new Date().getFullYear()} Voltaic Energy Company</p>
  </footer>
);
