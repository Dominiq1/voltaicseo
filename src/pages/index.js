import * as React from "react"
import { useEffect , useState, useRef} from 'react';
import { Link, Script } from "gatsby"
import solarHouseImage from "../images/solar.jpg"
import hvacImage from "../images/hvacart.png"
import fanImage  from "../images/fan.png"
import titleImage  from "../images/title24.png"
import solarImage from "../images/solar.png"
import logo from "../images/voltaiclogo.png"
import NavigationBar from "../components/NavigationBar"
import { Helmet } from 'react-helmet';
// index.js or App.js

import '../styles/global.css'

//Component Imports: 
import LeadIntakeHero from '../components/LeadIntake'


// Global Styles
const guaranteeSectionStyles = {
  backgroundColor: "#f0f4f8",
  padding: "2rem 1rem", // Smaller padding on mobile
  textAlign: "center", // Center text for mobile
}

// Testimonial Section Styles
const testimonialSectionStyles = {
  backgroundColor: "#e6e6e6",
  padding: "2rem 1rem", // Smaller padding on mobile
  textAlign: "center", // Center text for mobile
}

// Contact Section Styles
const contactSectionStyles = {
  backgroundColor: "#f7f7f7",
  padding: "2rem 1rem", // Smaller padding on mobile
  textAlign: "center", // Center text for mobile
}
// Global Styles
const pageStyles = {
  color: "#232129",
  fontFamily: "'Source Sans Pro', sans-serif",
  overflowX: "hidden",
  margin: 0, // Ensure no margin is affecting the full width
  padding: 0, // Ensure no padding is affecting the full width

}



const footerStyles = {
  backgroundColor: "#040e18",
  color: "#fff",
  padding: "1rem 0",
  textAlign: "center",
}


// Styles
const servicesSectionStyles = {
  backgroundColor: "#fff",
  padding: "3rem 1rem",
  textAlign: "center",
  backgroundColor: 'lightGray'
};

const serviceItemStyles = {
  marginBottom: "1rem",
  padding: '1rem',
  boxSizing: 'border-box',
  backgroundColor: 'teal',
  borderRadius: '20px',
  marginTop: '1em',
  color: 'white',
  width: '75%', // Set width to 75% of the container
  height: '30%', // Set height to 30% of the container
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

// Style for the image within the service item
const serviceItemImageStyles = {
  width: '80%', // Adjust width as needed
  height: 'auto', // Maintain aspect ratio
};

// Then, in your HeroSection component, you would use it




const inputStyles = {
  width: "100%", // Adjusted width
  margin: "0.5rem 0",
  padding: "0.5rem",
  borderRadius: "2px",
  border: "1px solid #ccc",
};

const buttonStyles = {
  width: "100%", // Adjusted width
  margin: "0.5rem 0",
  padding: "0.5rem 1rem",

  backgroundColor: "#008ca8",
  color: "#fff",
  borderRadius: "2px",
  border: "none",
  cursor: "pointer",
};


////////////

const GuaranteeSection = () => (
  <section style={guaranteeSectionStyles}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}>
      <h2>LEADING THE CHANGE</h2>
      <p>Providing Green, Modern And Affordable Home Or Business Energy Solutions Utilizing Renewable Solar Energy.</p>
      <p>Making the switch to renewable energy has never been simpler than with Voltaic - their whole home or business solutions make getting started a breeze...</p>
      {/* Rest of the content */}
    </div>
  </section>
);


const EnergyIndependenceSection = () => (
  <section style={{
    position: "relative",
    color: "#fff",
    textAlign: "center",
    backgroundImage: `url(${solarHouseImage})`, // You can replace this with the actual image later
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "10rem 1rem",
  }}>
    {/* Overlay div */}
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the last value to control darkness
      zIndex: 1,
    }}></div>
    {/* Content container, now with added style for positioning context */}
    <div style={{
      position: "relative",
      maxWidth: "1200px",
      margin: "0 auto",
      zIndex: 2, // Ensure content is above the overlay
    }}>
      <h2>ARE YOU ENERGY INDEPENDENT?</h2>
      <p>Stay Up And Running When The Grid Goes Down</p>
      <div style={{ margin: "2rem 0" }}>
        <p>With modern life bringing more reliance on energy than ever before, it is important to explore
        solutions for energy grid outages. Voltaic provides a modern solution allowing users to go green
        and become energy independent, even when the grid goes down. Solar panels are easily
        installed, creating a safe and renewable source of green energy for you and your family. Solar
        energy can provide long-term savings on electricity bills, as well as peace of mind in crisis
        situations. Enjoy your modern lifestyle with Voltaic Solar's renewable solutions!</p>
      </div>
      <Link to="/quote" style={{
        background: "#00B4D8",
        padding: "0.5rem 1rem",
        borderRadius: "2px",
        textDecoration: "none",
        color: "#fff",
        fontWeight: "bold",
      }}>
        GET A QUOTE
      </Link>
    </div>
  </section>
);

// Define an array of service objects
const services = [
  {
    image: solarImage,
    title: "SOLAR PANEL INSTALLATION",
    description: "High-efficiency solar panels to power your home with clean, renewable energy."
  },
  {
    image: hvacImage,
    title: "HVAC SYSTEM INSTALLATION",
    description: "High-efficiency solar panels to power your home with clean, renewable energy."
  },
  {
    image: fanImage,
    title: "WHOLE HOUSE FAN",
    description: "High-efficiency solar panels to power your home with clean, renewable energy."
  },
  {
    image: titleImage,
    title: "TITLE 24 ROOF INSTALL",
    description: "High-efficiency solar panels to power your home with clean, renewable energy."
  }
];

const Solarreasons = [
  {
    image: solarImage,
    title: "Clean Energy",
    description: "Harness the power of the sun to generate clean and renewable energy for your home."
  },
  {
    image: hvacImage,
    title: "Energy Savings",
    description: "Reduce your electricity bills by generating your own solar power and saving on utility costs."
  },
  {
    image: titleImage,
    title: "Energy Independence",
    description: "Gain independence from the grid and power your home with sustainable energy solutions."
  },
  {
    image: fanImage,
    title: "Environmental Impact",
    description: "Reduce your carbon footprint and contribute to a cleaner environment by using solar energy."
  },
 
];





const TestimonialSection = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
    script.async = true;
    script.defer = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section style={testimonialSectionStyles}>
      <h2>What Our Customers Say</h2>
      {/* The widget will attach itself to this div */}
      <div className="sk-ww-google-reviews" data-embed-id="25361293"></div>
    </section>
  );
};


const Footer = () => (
  <footer style={footerStyles}>
    <p>© {new Date().getFullYear()} Voltaic Energy Company</p>
  </footer>
)

// Main page component
const IndexPage = () => {

 
  useEffect(() => {

    // This code runs after component mounts, which is only in the browser
    // Safe place to access window or other browser-specific globals
    const handleResize = () => {
      // Your resize logic here, e.g. setting state based on window size
    };

    handleResize(); // Call once to set state on mount
    window.addEventListener('resize', handleResize);

    // Hotjar Tracking Code
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:3859647,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');








    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <main style={pageStyles}>
     <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Home Page</title>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          /* Add any other global styles here */
        }
        *, *::before, *::after {
          box-sizing: border-box;
          /* Add any other global styles here */
        }
      `}</style>
    </Helmet>
      <NavigationBar />
    
      <LeadIntakeHero slug={"Home"}/>

      <Footer />
    
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

