import React from "react";

const HeroSection = ({ content }) => {
    const heroStyle = {
      // define styles similar to the screenshot here
    };
  
    return (
      <div style={heroStyle}>
        <h1>{content}</h1>
        {/* Add more elements like a subtitle or a call-to-action button if needed */}
      </div>
    );
  };
  

  export default HeroSection;