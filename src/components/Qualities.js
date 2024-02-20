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
      title: 'Unrivaled home solar and battery experience',
      description: 'With 900,000 homes and counting, no one has more installation expertise.',
    },
    {
      icon: '⚡',
      title: 'Smart technology',
      description: 'An ecosystem of innovative products that put you in control of your home energy needs.',
    },
    {
      icon: '💳',
      title: 'Payment solutions for every home',
      description: 'Tailored plans including predictable monthly payments, little-to-no money down, and no-debt options.',
    },
    {
      icon: '🛡️',
      title: 'The Voltaic Guarantee',
      description: 'The industry’s most comprehensive repairs, maintenance & monitoring program.',
    },
  ];

  return (
    <>
      <div style={responsiveHeadlineStyle}>#1 home solar & battery storage company in California</div>
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
