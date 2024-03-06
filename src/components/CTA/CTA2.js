import React, { useState, useEffect } from 'react';
import google from '../../images/Google.jpeg';
import yelp from '../../images/yelp.png';
import angi from '../../images/angieslist.png';
import bbb from '../../images/BBB.png';
import homeAdvisor from '../../images/homeadvisor.png';

// Example KPI data structure
const kpiData = [
  { label: 'Bookings This Month', value: '214' },
  { label: 'Active Clients', value: '1,250+' },
  { label: 'Years Experience', value: '40' },
  { label: 'Active Clients', value: '1,250+' },
];

// Example image data structure
const imageData = [
  { src: google, alt: 'Google' },
  { src: yelp, alt: 'Yelp' },
  { src: angi, alt: 'Angi' },
  { src: bbb, alt: 'BBB' },
  { src: homeAdvisor, alt: 'HomeAdvisor' },
];

const KPIBlock = ({ label, value }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
    color: 'white'
  }}>
    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{value}</div>
    <div style={{ fontSize: '14px' }}>{label}</div>
  </div>
);
const ImageBlock = ({ src, alt }) => (
  <div style={{
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    // Assuming the original width and height were 100px
    width: '80px', // 70% of the original width
    height: '80px' // 70% of the original height
  }}>
    <img src={src} alt={alt} style={{ maxWidth: '100%', maxHeight: '100%' }} />
  </div>
);

const DashboardComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const kpiStyle = {
    backgroundColor: 'black',
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: '10px',
    padding: isMobile ? '10px' : '30px' // Taller row on desktop
  };

  const imageSectionStyle = {
    backgroundColor: 'white',
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
    alignItems: 'center', // This will ensure vertical centering of grid items
    justifyItems: 'center', // This will ensure horizontal centering of grid items
    gap: '10px',
    padding: '10px',
    marginTop: '20px'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={kpiStyle}>
        {kpiData.map((kpi, index) => (
          <KPIBlock key={index} label={kpi.label} value={kpi.value} />
        ))}
      </div>
      <div style={imageSectionStyle}>
        {imageData.map((image, index) => (
          <ImageBlock key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default DashboardComponent;
