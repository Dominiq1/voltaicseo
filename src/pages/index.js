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




// Define your base styles outside of the component
const baseHeadingStyles = {
  fontSize: '2rem', // Adjust base font size as needed
  fontWeight: 'bold',
  margin: '0.5rem 0',
  // Do not set text alignment here, we'll handle it in media queries
};

const baseSubHeadingStyles = {
  fontSize: '1.5rem',
  margin: '0.5rem 0',
  // Do not set text alignment here, we'll handle it in media queries
};

const baseInputStyles = {
  width: '100%', // Full width
  padding: '10px',
  margin: '10px 0',
  // Add any additional base styles for the input
};
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


const heroSectionStyles = {
  position: 'relative',
  color: "#fff",
  backgroundImage: `url(${solarHouseImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: 'flex-start', // Align items to the start (left)
  textAlign: 'left', // Align text to the left
  padding: '4rem 1rem', // Adjust padding as needed
  justifyContent: "center",
  width: '100%', // Full width
  minHeight: '100vh', // Make sure it takes at least the full height of the viewport
  zIndex: 1,
};


const contentContainerStyle = {
  position: 'relative',
  zIndex: 3,
  maxWidth: '1200px', // Max width of the content, can be adjusted
  width: '100%', // Full width of the content
  paddingLeft: '1rem', // Consistent padding from the left side
  paddingRight: '1rem', // Consistent padding from the right side
  marginLeft: 'auto', // Center the container
  marginRight: 'auto', // Center the container
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
  textAlign: 'center', 
  // color:'red',
  margin: '0.5rem 0', // Adjust spacing as needed
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Optional: Text shadow for better readability
};

// Style for the subheading
const subHeadingStyles = {
  fontSize: '1.5rem', // Adjust size as needed
  margin: '0.5rem 0', // Adjust spacing as needed
};



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
  color: 'white'

};


// Then, in your HeroSection component, you would use it

// Input and Button Styles with Rounded Corners
const inputStyles = {
  width: '90%', // Take up most of the width, leave some margin
  margin: '0.5rem 5%', 
  padding: "0.5rem",
  borderRadius: "20px", // Rounded corners for inputs
  border: "1px solid #ccc", // Standard border color
 
}

const buttonStyles = {
  width: '90%', // Take up most of the width, leave some margin
  margin: '0.5rem 5%', // Center by adding equal left and right margin
  padding: "0.5rem 1rem",
  backgroundColor: "#00B4D8",
  color: "#fff",
  borderRadius: "20px", // Rounded corners for button
  border: "none", // No border for button
  cursor: "pointer", // Pointer cursor on hover
}

// Media query for mobile devices
const responsiveStyles = `
@media (max-width: 768px) {
  .hero-heading {
    text-align: left;
    width: 100%; // Full width
    margin-left: 0; // Reset any left margin
  }
  .hero-subheading {
    text-align: left;
    width: 100%; // Full width
    margin-left: 0; // Reset any left margin
  }
  .hero-input,
  .hero-button {
    width: 90%; // Adjust width as needed
    margin: 0.5rem 5%; // Adjust margin for centering
  }
}
`;

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
// ... other imports and code ...

const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      homeSize: event.target.elements.homeSize.value,
    };

    try {
      const response = await fetch('/.netlify/functions/submitToCrm', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('There was an error submitting the form:', error);
    }
    setIsSubmitting(false);
  };

  // If the form has been submitted, display the success message
  if (formSubmitted) {
    return (
      <div style={contactSectionStyles}>
        <h2>Thank you for your submission!</h2>
        <p>We will be in touch soon.</p>
      </div>
    );
  }

  // If the form hasn't been submitted, display the form
  return (
    <section style={contactSectionStyles}>
      <h2>Get A Quote Today</h2>
      <p>Free, No Obligation</p>
      <form onSubmit={handleSubmit} style={{ maxWidth: "800px", margin: "0 auto" }}>
        <input name="name" type="text" placeholder="Name" style={inputStyles} />
        <input name="email" type="email" placeholder="Email*" required style={inputStyles} />
        <input name="homeSize" type="text" placeholder="Home Size" style={inputStyles} />
        <button type="submit" style={buttonStyles} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </section>
  );
};

// ... other components and code ...





// You might need to define `chatInterfaceStyles` based on your design preferences.



const HeroSection = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://stella.demand-iq.com/widget-address/voltaic-construction.estimate.demand-iq.com/";
    script.async = true;
    document.body.appendChild(script);

    // The widget may take some time to load, so we might need to set a timeout
    // to apply styles after it's present in the DOM.
    const timer = setTimeout(() => {
      if (widgetRef.current) {
        const widgetContainer = widgetRef.current;
        const widget = widgetContainer.querySelector('.demand-iq-stella-widget');
        if (widget) {
          // Apply custom styles here
          widget.style.margin = '0 auto';
          widget.style.display = 'flex';
          widget.style.flexDirection = 'column';
          widget.style.alignItems = 'center';
          widget.style.justifyContent = 'center';
        }
      }
    }, 1000); // Adjust the timeout as needed

    return () => {
      clearTimeout(timer);
      document.body.removeChild(script);
    };
  }, []);

  return (
   


<section style={heroSectionStyles}>
<style>{responsiveStyles}</style>
<div style={overlayStyle}></div> {/* Overlay */}
<div style={contentContainerStyle}> {/* Content container */}
  <h1 className="hero-heading" style={baseHeadingStyles}>Defend Your Home From Blackouts —</h1>
  <p className="hero-subheading" style={baseSubHeadingStyles}>Get Your Custom Energy Resilience plan today!</p>
  {/* Input and button elements with classes for styling */}
  <div ref={widgetRef} className="demand-iq-stella-widget" data-utm-content=""></div>

</div>
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
      /* ... other styles ... */
    }
    *, *::before, *::after {
      box-sizing: border-box;
      /* ... other styles ... */
    }
  `}</style>
      </Helmet>
      <NavigationBar />
      {/* <NavigationBar/> */}
      {/* <ChatInterface/> */}
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

