import React from "react";

const QualitiesComponent = () => {
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '40px 20px', // Increase the row gap for more vertical spacing between items
        padding: '20px', // Adjust if you need more padding around the entire grid
        maxWidth: '1048px',
        margin: '0 auto',
        backgroundColor: '#fff',
      };
      
      const featureItemStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '20px 10px', // Increase the top and bottom padding for more vertical spacing
      };
      
    
      const headlineStyle = {
        fontWeight: 'bold',
        fontSize: '2em', // Base desktop font size
        textAlign: 'center',
      

        margin: '0 auto',
        padding: '50px 5% 50px 10%', // Base padding for desktop, adjust as needed
        color: 'white',
        backgroundColor:'black',
    };
    
// Define headline styles specifically for mobile using a media query
const mobileHeadlineStyle = {
    ...headlineStyle,
    fontSize: '18px', // Smaller font size for mobile
    padding: '0 10%', // Increase padding for mobile if needed
};

// Combine styles and media queries
const responsiveHeadlineStyle = {
    ...headlineStyle,
    '@media (max-width: 768px)': mobileHeadlineStyle,
};




  const featureIconStyle = {
    fontSize: '2rem',
    marginBottom: '10px',
  };

  const featureTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const featureDescriptionStyle = {
    fontSize: '1rem',
    marginBottom: '10px',
  };
  const features = [
    {
      icon: '🌞',
      title: 'Leading provider of home solar solutions',
      description: 'Trusted by homeowners across California for reliable solar energy solutions.',
    },
    {
      icon: '⚡',
      title: 'Expert in battery storage systems',
      description: 'Power your home with efficient battery storage solutions for uninterrupted energy supply.',
    },
    {
      icon: '❄️',
      title: 'HVAC specialists',
      description: 'Keep your home comfortable year-round with our expert HVAC services and solutions.',
    },
    {
      icon: '💡',
      title: 'Comprehensive home energy solutions',
      description: 'From solar to battery storage and HVAC, we cover all your home energy needs.',
    },
  ];
  
  return (
    <>
      <div style={responsiveHeadlineStyle}> #1 HOME SOLAR & BATTERY STORAGE COMPANY IN CALIFORNIA</div>

 
      <div style={gridContainerStyle}>
        {features.map((feature, index) => (
          <div key={index} style={featureItemStyle}>
            <span style={featureIconStyle}>{feature.icon}</span>
            <h3 style={featureTitleStyle}>{feature.title}</h3>
            <p style={featureDescriptionStyle}>{feature.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default QualitiesComponent;
