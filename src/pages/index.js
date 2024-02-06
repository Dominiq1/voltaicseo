import * as React from "react"
import { useEffect } from 'react';
import { Link } from "gatsby"
import solarHouseImage from "../images/solar.jpg"
import hvacImage from "../images/hvacart.png"
import fanImage  from "../images/fan.png"
import titleImage  from "../images/title24.png"
import solarImage from "../images/solar.png"
import logo from "../images/voltaiclogo.png"
import NavigationBar from "../components/NavigationBar"

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
  padding: "0",
  fontFamily: "'Source Sans Pro', sans-serif",
  overflowX: "hidden",
}

// Navigation Bar Styles
const navigationBarStyles = {
  //backgroundColor: "#00B4D8", // Teal color for navigation
  backgroundColor: 'teal',
  color: "#fff", // White color for text
  padding: "1rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // subtle shadow for depth
}



const heroSectionStyles = {
  position: 'relative',
  color: "#fff",
  // Removed textAlign as it's no longer needed for the entire section
  padding: "4rem 1rem", // Adjust padding as needed, adding more top padding
  backgroundImage: `url(${solarHouseImage})`, // Replace with your actual image path
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: 'flex-start', // Align items to the start (left)
  width: '100%', // Full width
  minHeight: '45em', // Full viewport height
  zIndex: 1, // Below the overlay
};

// Style for the content container
const contentContainerStyle = {
  position: 'relative',
  zIndex: 3,
  maxWidth: '1200px', // Max width of the content, can be adjusted
  width: '100%', // Full width of the content
  paddingLeft: '3rem', // Padding from the left side
  // Add responsive padding here as needed
};

// Overlay style to darken the background image
const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  // backgroundColor: 'blue', // Darken the overlay
  zIndex: 2, // Above the background image
};
// Style for the heading
const headingStyles = {
  fontSize: '1.5rem', // Adjust size as needed
  fontWeight: 'bold',
  // backgroundColor: 'green',
  width:'70vw',
  // color:'red',
  margin: '0.5rem 0', // Adjust spacing as needed
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Optional: Text shadow for better readability
};

// Style for the subheading
const subHeadingStyles = {
  fontSize: '1.5rem', // Adjust size as needed
  margin: '0.5rem 0', // Adjust spacing as needed
};

// Specific styles for the "GET A QUOTE" button
const quoteButtonStyles = {
  background: '#00B4D8',
  padding: '0.5rem 1rem',
  borderRadius: '2px',
  textDecoration: 'none',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1.25rem', // Adjust size as needed
  margin: '1rem 0', // Adjust spacing as needed
  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)', // Optional: Text shadow for better readability
  display: 'inline-block', // To apply padding and margin correctly
  boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.2)', // Optional: Box shadow for a 3D effect
};
// Media query for mobile devices
const mobileBreakpoint = '768px'; // This is a common breakpoint for mobile devices, adjust as needed



// Apply media queries
const applyMediaQueries = () => {
  if (window.innerWidth <= parseInt(mobileBreakpoint)) {
    headingStyles.fontSize = '1.8rem'; // Smaller font size for mobile
    subHeadingStyles.fontSize = '1rem'; // Smaller font size for mobile
    contentContainerStyle.paddingLeft = '1rem'; // Less padding for mobile
    heroSectionStyles.padding = '2rem 1rem'; // Less vertical padding for mobile
    quoteButtonStyles.padding = '0.5rem 1rem'; // Adjust as needed for mobile
  }
};

// Assuming `navigationLinkStyles` is defined elsewhere and includes common link styles
const navigationLinkStyles = {
  textDecoration: 'none',
  color: '#fff',
  fontWeight: 'bold',
  // Other link styles
};

// Invoke the function to apply media queries
applyMediaQueries();

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
  borderRadius:'20px',
  marginTop: '1em' ,

};


// Inside your component or a separate CSS file
// This will be a <style> tag if inside the component or CSS rules if in a CSS file
const styles = `
  @media (min-width: 768px) {
    .service-item {
      width: calc(25% - 1rem); // 4 items per row on desktop
      margin: 0.5rem; // Add margin on desktop
    }
  }
`;


// Input and Button Styles with Rounded Corners
const inputStyles = {
  margin: "0.5rem",
  padding: "0.5rem",
  borderRadius: "20px", // Rounded corners for inputs
  border: "1px solid #ccc", // Standard border color
  width: "calc(100% - 1rem)", // Full width minus margin
}

const buttonStyles = {
  margin: "0.5rem",
  padding: "0.5rem 1rem",
  backgroundColor: "#00B4D8",
  color: "#fff",
  borderRadius: "20px", // Rounded corners for button
  border: "none", // No border for button
  cursor: "pointer", // Pointer cursor on hover
}


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


const ServicesSection = () => (
  <section style={servicesSectionStyles}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <h1>Our Services</h1>
      <h3>Renewable Energy Solutions For Your Whole Home</h3>
      <p3>Voltaic offers modern, whole home or business solutions 
        for energy independence. Solar power is the cornerstone of
         their offerings; a renewable and green source of energy that
          allows homeowners to be less dependent on traditional electricity
           sources. And the best part? Solar systems are becoming more efficient 
           and cost-effective every day! Invest in a Voltaic Solar system to 
           ensure your home or business is equipped to stay ahead of
            the changing energy landscape.</p3>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around", // This will handle spacing on all screen sizes
        alignItems: "flex-start",
      }}>
        {/* Each service item */}
        <div className="service-item" style={serviceItemStyles}>
          <img src={solarImage} alt="Solar Panel Installation" style={{ width: "100%", marginBottom: "1rem" }} />
          <h3>SOLAR PANNEL INSTALLATION</h3>
          <p>High-efficiency solar panels to power your home with clean, renewable energy.</p>
        </div>
        {/* Repeat for other service items */}
        <div className="service-item" style={serviceItemStyles}>
          <img src={hvacImage} alt="Solar Panel Installation" style={{ width: "100%", marginBottom: "1rem" }} />
          <h3>HVAC SYSTEM INSTALLATION</h3>
          <p>High-efficiency solar panels to power your home with clean, renewable energy.</p>
        </div>
        {/* ... */}
        <div className="service-item" style={serviceItemStyles}>
          <img src={fanImage} alt="Solar Panel Installation" style={{ width: "100%", marginBottom: "1rem" }} />
          <h3>WHOLE HOUSE FAN</h3>
          <p>High-efficiency solar panels to power your home with clean, renewable energy.</p>
        </div>
        <div className="service-item" style={serviceItemStyles}>
          <img src={titleImage} alt="Solar Panel Installation" style={{ width: "100%", marginBottom: "1rem" }} />
          <h3>TITLE 24 ROOF INSTALL</h3>
          <p>High-efficiency solar panels to power your home with clean, renewable energy.</p>
        </div>
      </div>
    </div>
    <style>
      {`
        @media (min-width: 768px) {
          .service-item {
            width: calc(25% - 2rem); // 4 items per row on desktop
            margin: 1rem; // Add margin between items
          }
        }
      `}
    </style>
  </section>
);




const TestimonialSection = () => (
  <section style={testimonialSectionStyles}>
    <h2>What Our Customers Say</h2>
    {/* Add testimonials here */}
  </section>
);

// Define your components
// const NavigationBar = () => (
//   <nav style={navigationBarStyles}>
//     <img src={logo} alt="Company Logo" style={{ height: "3em" }} />
//     <div>
//       <Link to="/" style={navigationLinkStyles}>Home</Link>
//       <Link to="/about" style={navigationLinkStyles}>About</Link>
//       <Link to="/services" style={navigationLinkStyles}>Services</Link>
//       <Link to="/contact" style={navigationLinkStyles}>Contact</Link>
//     </div>
//   </nav>
// );


// Updated and additional components based on the provided code structure

const ContactSection = () => (
  <section style={contactSectionStyles}>
    <h2>Get A Quote Today</h2>
    <p>Free, No Obligation</p>
    <form style={{ maxWidth: "800px", margin: "0 auto" }}>
      <input type="text" placeholder="Name" style={inputStyles} />
      <input type="email" placeholder="Email*" required style={inputStyles} />
      <input type="text" placeholder="Home Size" style={inputStyles} />
      <button type="submit" style={buttonStyles}>Submit</button>
    </form>
  </section>
)

const HeroSection = () => (
  <section style={heroSectionStyles}>
    <div style={overlayStyle}></div> {/* Overlay */}
    <div style={contentContainerStyle}> {/* Content container */}
    <h1 style={headingStyles}>Empower Your Home with Sustainable Energy Solutions</h1>
  <p style={subHeadingStyles}>Start Your Eco-Friendly Journey Today!</p>
 
      <Link to="/quote" style={{ ...navigationLinkStyles, ...quoteButtonStyles }}>
        GET A QUOTE
      </Link>
    </div>
  </section>
);
const Footer = () => (
  <footer style={footerStyles}>
    <p>© {new Date().getFullYear()} Voltaic Energy Company</p>
  </footer>
)

// Main page component
const IndexPage = () => {

  const applyMediaQueries = () => {
    if (typeof window !== "undefined" && window.innerWidth <= parseInt(mobileBreakpoint)) {
      headingStyles.fontSize = "1.8rem"; // Smaller font size for mobile
      subHeadingStyles.fontSize = "1rem"; // Smaller font size for mobile
      contentContainerStyle.paddingLeft = "1rem"; // Less padding for mobile
      // Add other style adjustments here
    }
  };
  useEffect(() => {
    // This code runs after component mounts, which is only in the browser
    // Safe place to access window or other browser-specific globals
    applyMediaQueries();
  }, []);
  return (
    <main style={pageStyles}>
      {/* <NavigationBar /> */}
      <NavigationBar/>
      <HeroSection />
      
      <GuaranteeSection />
      <ServicesSection />
      <EnergyIndependenceSection/>
      <TestimonialSection />
      <ContactSection />
      {/* Other sections can be added here */}
      {/* Additional content sections would go here */}
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>