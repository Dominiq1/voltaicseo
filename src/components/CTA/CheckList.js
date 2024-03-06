import React, { useState, useEffect } from 'react';
import checkmark from "../../images/guarentee.webp"

//==============Acordion ==============
const accordionData = [
  {
    title: 'Bathroom',
    content: [
      'Toilets thoroughly cleaned and disinfected, including base and behind',
      'Mirrors cleaned to a streak-free shine, enhancing bathroom brightness',
      'Floors hand-washed and disinfected, reaching corners and edges',
      'Shower and tub scrubbed, removing soap scum and grime',
      'Sink and countertops disinfected, with personal items wiped and replaced',
      'Faucets and fixtures polished, looking new',
      'Towels neatly hung and/or folded',
      'Exhaust fan dusted to improve air quality',
      'Cabinet fronts wiped down and handles sanitized',
      'Trash removed, liner replaced, and can disinfected'
    ]
  },
  {
    title: 'Kitchen',
    content: [
      'Countertops and backsplash disinfected, with all items removed and replaced',
      'Sinks scrubbed and disinfected, making them safe for food preparation',
      'Exterior of appliances cleaned, including dishwasher, refrigerator, and oven',
      'Stovetop and drip pans degreased and polished',
      'Microwave cleaned inside and out, removing any food splatters',
      'Cabinet fronts washed and handles sanitized',
      'Floors vacuumed and mopped, including under the movable appliances',
      'Windowsills wiped down, removing dust and dirt',
      'Table and chairs wiped down, free of crumbs and smudges',
      'Trash emptied, recycled separated, and canisters cleaned'
    ]
  },
  {
    title: 'Bedroom',
    content: [
      'Beds made with fresh linens, providing a comfortable sleeping area',
      'All furniture and picture frames dusted, maintaining a neat appearance',
      'Mirrors cleaned, ensuring a smudge-free view',
      'Lamps and lampshades dusted, improving lighting quality',
      'Windowsills and ledges wiped down, removing dust and allergens',
      'Floor vacuumed and mopped, including under the bed if accessible',
      'Closet floors and surfaces dusted, keeping clothing clean',
      'Trash removed, promoting a hygienic environment',
      'Light fixtures and ceiling fans dusted, enhancing room\'s ambiance',
      'Door handles and light switches sanitized, reducing germ transmission'
    ]
  },
  {
    title: 'Living Room',
    content: [
      'Upholstery vacuumed, including under cushions for a thorough clean',
      'Coffee and side tables cleaned, with all items removed and replaced',
      'Hard surfaces like bookshelves and entertainment centers dusted',
      'Electronics wiped down, preventing dust accumulation',
      'Flooring vacuumed and/or mopped, including edges and beneath furniture',
      'Throw blankets and pillows straightened, adding to room’s comfort',
      'Fireplace exterior cleaned, contributing to the focal point of the room',
      'Windows cleaned internally to let in natural light',
      'Light fixtures, lamps, and ceiling fans dusted to brighten the room',
      'All decor and knick-knacks dusted, completing the room’s polished look'
    ]
  },
  {
    title: 'Corridors and Other Areas',
    content: [
      'Hallway floors vacuumed and mopped, providing a welcoming path through home',
      'Staircases cleaned, including balusters and railings for safety and neatness',
      'Entryway tidied, offering a good first impression',
      'Baseboards throughout the home dusted, maintaining a finished look',
      'Door frames and doors wiped clean of fingerprints and smudges',
      'Light switches and thermostats sanitized to minimize germ spread',
      'Ceiling corners checked for cobwebs and cleared',
      'Area rugs vacuumed and straightened, aligning with the neatness of the space',
      'Wall decor and photos dusted, keeping memories sparkling',
      'Air vents dusted, promoting better indoor air quality'
    ]
  }
];

  
  const AccordionItem = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
  
    const accordionHeaderStyle = {
      cursor: 'pointer',
      padding: '15px 20px',
      background: '#ffffff', // Clean white background
      borderBottom: '1px solid #dddddd',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
      fontFamily: '"Segoe UI", "Helvetica Neue", Arial, sans-serif', // Modern font
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '#333333', // Dark gray for better readability
      transition: 'background-color 0.3s ease', // Smooth transition for hover effect
      display: 'flex',
      justifyContent: 'space-between', // Add space between title and icon
      alignItems: 'center',
    };
  
    const iconStyle = {
      transition: 'transform 0.3s ease', // Smooth icon rotation
    };
  
    const accordionContentStyle = {
      background: '#f8f8f8', // Slightly off-white background for the content
      padding: '15px 20px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Consistent with the header
      fontFamily: '"Segoe UI", "Helvetica Neue", Arial, sans-serif',
      fontSize: '0.9rem',
      color: '#333333',
      transition: 'max-height 0.3s ease, padding 0.3s ease', // Smooth transition for accordion open/close
      overflow: 'hidden',
      maxHeight: isActive ? '500px' : '0', // Adjust max height according to content
      padding: isActive ? '15px 20px' : '0 20px', // Collapse padding when not active
    };
  
    return (
      <div style={{ marginBottom: '10px' }}>
        <div
          style={accordionHeaderStyle}
          onClick={() => setIsActive(!isActive)}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#eeeeee')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#ffffff')}
        >
          <h3 style={{ margin: '0' }}>{title}</h3>
          <div
            style={{
              ...iconStyle,
              transform: `rotate(${isActive ? '180deg' : '0deg'})`, // Rotate icon when active
            }}
          >
            {isActive ? '-' : '+'} {/* Change icon based on active state */}
          </div>
        </div>
        <div style={accordionContentStyle}>
          {isActive && (
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0 }}> {/* Changed listStyleType to 'disc' and added padding */}
              {content.map((item, index) => (
                <li key={index} style={{ padding: '5px 0' }}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };
  
  
  const Accordion = ({ items }) => {
    return (
      <div style={{ width: '100%', maxWidth: '700px', margin: '20px auto' }}>
        {items.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    );
  };
  
  const CleaningServicesAccordion = () => {
    return <Accordion items={accordionData} />;
  };
  
  // Array of accordion items
//===================================


const ChecklistSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const leftSectionStyle = {
    position: 'relative', // Add this to position the checkmark absolutely within this div
    backgroundColor: 'grey',
    padding: '50px',
    color: 'white',
    width: isMobile ? '100%' : '50%',
    boxSizing: 'border-box',
    backgroundImage: `url(${checkmark})`, // Add your checkmark image as a background
    backgroundPosition: 'right top', // Position the checkmark at the top right
    backgroundRepeat: 'no-repeat', // Prevent the image from repeating
    backgroundSize: '100px', // Adjust this value to scale the checkmark size appropriately
    height: '30em',
    paddingTop: '100px',
    justifyContent: 'center'
    
  };
  const rightSectionStyle = {
    backgroundColor: 'white',
    padding: '20px',
    width: isMobile ? '100%' : '50%',
    boxSizing: 'border-box'
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'stretch', // This ensures that child divs stretch to fill the container
    width: '100%',
    height: '100%',
    overflow: 'hidden' // In case the content overflows, it will be hidden
  };

  return (
    <div style={containerStyle}>
      <div style={leftSectionStyle}>
        <div>
        <h2>50-Point House Cleaning Checklist</h2>
          <image src={checkmark}/>
        </div>
   
        <p>Our 50-Point Checklist is our signature service that ensures your entire home will be cleaned, top to bottom.</p>
        <p>Since each home is different, we customize each service to fit your home, needs and preferences.</p>
        <p>Special requests? No problem. From trouble spots to off-limit zones, we'll create a cleaning plan that matches your home and preferences.</p>
      </div>
      <div style={rightSectionStyle}>
        <CleaningServicesAccordion/>
      </div>
    </div>
  );
};

export default ChecklistSection;
