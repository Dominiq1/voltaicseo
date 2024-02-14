import React, { useState, useRef , useEffect} from 'react';
import solarHouseImage from '../images/solar.jpg'; // Adjust the path as necessary
import '../styles/leadIntake.css'; // Adjust the path based on your file structure
import '../styles/global.css'

///// POST SUBMISSION STYLES

 ///= ================ = = = = = == = ==   = = 
 const postSubmissionContainerStyle = {

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start', // Align items to the start (left)
  padding: '2rem',
  backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
  color: 'white',
  zIndex: 4,
  position: 'relative', // To layer on top of the hero image
  borderRadius: '10px'
};

const postSubmissionTitleStyle = {

  fontSize: '1.5rem', // Adjust as needed
  fontWeight: 'bold',
  marginBottom: '1rem',
};

const postSubmissionSubtitleStyle = {
  fontSize: '1rem', // Adjust as needed
  marginBottom: '2rem',
  
};

const stepListStyle = {
  listStyle: 'none',
  padding: 0,
  width: '100%', // Take the full width of the container
};

const stepItemStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
};

const stepIconStyle = {
  fontSize: '1.25rem', // Size of the icon
  width: '25px', // Width of the icon container for alignment
  marginRight: '0.5rem',
  color: '#50c1f7', // Color of the icons
};

const stepTextStyle = {
  fontSize: '1rem', // Adjust as needed
};



 ///= ================ = = = = = == = ==   = = 



//    HERO STYLES




 ///= ================ = = = = = == = ==   = = 


const heroSectionStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  color: '#fff',
  backgroundImage: `url(${solarHouseImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  padding: '4rem 1rem',
  width: '100%',
  zIndex: 1,
};
const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 2, // Overlay should be just above the background image
};


const callToActionStyle = {
  fontWeight: 'bold',

  textTransform: 'uppercase',
  margin: '1rem 0',
  color: '#50c1f7',
};
const headlineStyle = {
  fontWeight: 'bold',
  fontSize: '2rem', // Example size, adjust as needed
  textAlign: 'left',
  marginBottom: '1rem',
};

const subQuestionStyle = {
  textAlign: 'left',
  marginBottom: '0.5rem',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',

  alignItems: 'center',
  width: '100%',
};




const textContentStyle = {
  textAlign: 'left',

  maxWidth: '500px', // Adjust as needed to fit your layout
  margin: '0 auto', // This centers the text block
};


const buttonStyles = {
  width: 'calc(100% - 1rem)',
  maxWidth: '500px',
  height: '50px',
  margin: '1rem auto',
  padding: '0.5rem 1rem',
  backgroundColor: '#008ca8',
  color: '#fff',
  borderRadius: '25px',
  border: 'none',
  cursor: 'pointer',
  display: 'block',
  fontSize: '1rem',
  textAlign: 'center',
  fontWeight: 'Bold'


};

const centeredContentStyle = {

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  textAlign: 'center',
  padding: '1rem',
  boxSizing: 'border-box',
  zIndex: 3,
  // backgroundColor: 'red',
  marginBottom: '15em'
};

const formContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  backgroundColor: "red",
  marginTop: '2rem',
  zIndex: 9,
};

const StepForm = ({
  step,
  onNext,

  onFormSubmit,
  formData,
  validateInput,
  validationErrors,
  handleInputChange
}) => {



   ///============== INPUT FIELD ================

 const shakeStyle = {
  animation: 'shake 0.5s', // Example, define a CSS keyframe animation named shake
  animationIterationCount: 'infinite',
};



// Updated InputField component with focus management
// Adjusted InputField component to handle both input and select types
// Adjusted InputField component to handle both input and select types
const InputField = ({
  label,
  name,
  type,
  options, // New prop for select options
  placeholder,
  value,
  onChange,
  className,
  required,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const baseInputStyle = {
    height: '50px',
    width: '100%', // This sets the input field to take 100% of its container's width
    margin: '10px 0',
    padding: '0 20px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '30px',
    boxSizing: 'border-box',
  };
  

  // Render a select element if options are provided
  if (type === 'select' && options) {
    return (
      <div > 
        {label && <label htmlFor={name}>{label}</label>}
        <select
          ref={inputRef}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required={required}
          style={baseInputStyle}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    );
  }

  // Default to rendering an input element
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        ref={inputRef}
        type={type}
        name={name}
        id={name}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        style={baseInputStyle}
      />
    </div>
  );
};










// InputField component
// const InputField = ({ label, name, type , placeholder, value, onChange, className, required }) => {
//   // Define the base styles for the input fields
//   const baseInputStyle = {
//     height: '50px', // Larger height for touch friendliness
//     width: '100%', // Full width to match the container
//     margin: '10px 0', // Margin for spacing around the input
//     padding: '0 20px', // Padding inside the input
//     fontSize: '16px', // Font size similar to the image
//     border: '1px solid #ccc', // Light grey border
//     borderRadius: '30px', // Rounded corners like the image
//     boxSizing: 'border-box', // Ensures padding doesn't affect the width
//   };

//   // Merge base styles with shake effect if className is provided
//   const inputStyle = className ? {...baseInputStyle, ...shakeStyle} : baseInputStyle;

//   return (
//     <div>
//       {label && <label htmlFor={name} style={{ display: 'block' }}>{label}</label>}
//       <input
//         type={type}
//         name={name}
//      //   id={name}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//       //  required={required}
//         className={className} // Apply the 'shake' class if there's a validation error
//       //  style={inputStyle}
//       />
//     </div>
//   );
// };

  const goToNextStep = (newStep) => () => {
    let isValid = true;
  
    switch (step) {
      case 1:
        break;
      case 2:
        isValid = validateInput('homeOwnership', formData.homeOwnership);
        break;
      case 3:
        isValid = validateInput('utilityBillCost', formData.utilityBillCost);
        break;
      case 4:
        isValid = validateInput('email', formData.email);
        break;
      case 5:
        isValid = validateInput('name', formData.name);
        break;
      case 6:
        isValid = validateInput('phoneNumber', formData.phoneNumber);
        break;
      default:
        break;
    }

    if (!isValid) {
      return;
    }

    onNext(newStep);
  };


  switch (step) {
    // Step 1: Initial button
    case 1:
      return (
        <div style={centeredContentStyle}>
      
<div style={textContentStyle}>
          <h1 style={headlineStyle}>Enhance Home Resilience During Power Interruptions</h1>
          {/* <p style={subQuestionStyle}>Explore the path to energy self-sufficiency.</p> */}
          <p style={callToActionStyle}>Initiate your transition to a durable and eco-friendly future through solar energy.</p>
        </div>
        <div style={buttonContainerStyle}>
          <button style={buttonStyles} onClick={goToNextStep(2)}>
            Begin Your Solar Journey
          </button>
        </div>
      </div>
      );
    // Step 2: Home ownership question
    case 2:
      return (
        <div style={formContainerStyle}>
          <h2 style={headlineStyle}>Home Ownership</h2>
          <p style={subQuestionStyle}>Do you own your own home?</p>
          <InputField
            type="select"
            name="homeOwnership"
            
            value={formData.homeOwnership}
            onChange={(e) => handleInputChange('homeOwnership', e.target.value)}
            options={[
              { value: '', label: 'Select Home Ownership' },
              { value: 'Yes', label: 'Yes' },
              { value: 'No', label: 'No' }
            ]}
            required={true}
          />
          <button style={buttonStyles} onClick={goToNextStep(3)}>Next</button>
        </div>
      );
    // Step 3: Average electric bill
    case 3:

  return (
  <div style={formContainerStyle}>
    <h2 style={headlineStyle}>Electricity Costs</h2>
    <p style={subQuestionStyle}>What is your average electric bill?</p>
    <InputField
      type="select"
      name="utilityBillCost"
      label="Average Electric Bill"
      value={formData.utilityBillCost}
      onChange={(e) => handleInputChange('utilityBillCost', e.target.value)}
      options={[
        { value: '0-50', label: '$0-50' },
        { value: '51-100', label: '$51-100' },
        { value: '101-150', label: '$101-150' },
        // Add more options as needed
      ]}
      required={true}
    />
    <button style={buttonStyles} onClick={goToNextStep(4)}>Next</button>
  </div>
);

    // Step 4: Email address input
    case 4:
  return (
    <div style={formContainerStyle}>
      <h2 style={headlineStyle}>Good news, you're a great fit!</h2>
      <p style={subQuestionStyle}>Enter your Email Address</p>

    <InputField
                type="email"
                placeholder="Email Address"
                className={validationErrors.email ? 'shake' : ''}
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required={true}
              />
      <button style={buttonStyles} onClick={goToNextStep(5)}>Next</button>
    </div>
  );

    // Step 5: Name input
    case 5:
      return (
        <div style={formContainerStyle}>
      <h2 style={headlineStyle}>Good news, you're a great fit!</h2>
      <p style={subQuestionStyle}>What's your name?</p>
          {/* <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            className={validationErrors.name ? 'shake' : ''}
            onChange={(e) => handleInputChange('name', e.target.value)}
            style={inputStyles}
          /> */}


          <InputField
            label="Full Name"
            type="text"
            placeholder="Full Name"
            className={validationErrors.name ? 'shake' : ''}
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required={true}
          />
          <button style={buttonStyles} onClick={goToNextStep(6)}>Next</button>
        </div>
      );
    // Step 6: Final submission step
    // Step 6: Final submission step
    case 6:
      return (
        <div style={formContainerStyle}>
             <h2 style={headlineStyle}>One last thing!....</h2>
      <p style={subQuestionStyle}> What number can we reach you at?</p>
          {/* <input
            type="tel"
            className={validationErrors.phoneNumber ? 'shake' : ''}
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            required  // Make phone number input required
            style={inputStyles}
          /> */}
      <InputField
  label="What's your phone number?"
  type="tel"
  placeholder="Phone Number"
  className={validationErrors.phoneNumber ? 'shake' : ''}
  value={formData.phoneNumber}
  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
  required={true}
/>

          <button style={buttonStyles} onClick={onFormSubmit}>
            Submit
          </button>
        </div>
      );
    // Add additional cases for more steps if needed
    default:
      return null;
  }

};

const LeadIntakeHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    homeOwnership: 'Yes',
    utilityBillCost: '0-50',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    homeOwnership: false,
    utilityBillCost: false,
  });

  const validateInput = (field, value = '') => {
    let isValid = field === 'phoneNumber' ? /\d{10}/.test(value) : value.trim() !== '';
    setValidationErrors((prev) => ({ ...prev, [field]: !isValid }));

    if (!isValid) {
      setTimeout(() => {
        setValidationErrors((prev) => ({ ...prev, [field]: false }));
      }, 500);
    }
    return isValid;
  };
  const handleInputChange = (field, value) => {
    console.log(`Input changed - Field: ${field}, Value: ${value}`);
    setFormData(prevState => ({
      ...prevState,
      [field]: value
    }));
  };
  
  const handleNextStep = (nextStep) => {
    setCurrentStep(nextStep);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validations = [
      validateInput('name', formData.name),
      validateInput('email', formData.email),
      validateInput('phoneNumber', formData.phoneNumber),
      validateInput('homeOwnership', formData.homeOwnership),
      validateInput('utilityBillCost', formData.utilityBillCost),
    ];

    if (validations.some((isValid) => !isValid)) {
      return;
    }





  // Assuming formData is your form data state
  const { utilityBillCost, email, name, phoneNumber, homeOwnership } = formData;
  
  try {
    const response = await fetch('/.netlify/functions/submitLead', {
      method: 'POST',
      body: JSON.stringify({ utilityBillCost, email, name, phoneNumber, homeOwnership }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    setFormSubmitted(true);
  } catch (error) {
    console.error('There was an error submitting the form:', error);
  }

    // Submit form logic here...
  };

  const renderStepContent = () => {
    if (formSubmitted) {
      return (
        <div style={postSubmissionContainerStyle}>
        <h1 style={postSubmissionTitleStyle}>What's next</h1>
        <p style={postSubmissionSubtitleStyle}>
          We are here as your expert guide every step of the way.
        </p>
        <ul style={stepListStyle}>
          <li style={stepItemStyle}>
            <span style={stepIconStyle}>✓</span>
            <span style={stepTextStyle}>Submit your Details</span>
          </li>
          {/* Repeat for other steps */}
          <li style={stepItemStyle}>
            <span style={stepIconStyle}>✓</span>
            <span style={stepTextStyle}>We send out your Design Report</span>
          </li>
           {/* Repe
           at for other steps */}
              {/* Repeat for other steps */}
          <li style={stepItemStyle}>
            <span style={stepIconStyle}>.</span>
            <span style={stepTextStyle}>Our service rep will call you</span>
          </li>
           <li style={stepItemStyle}>
            <span style={stepIconStyle}>.</span>
            <span style={stepTextStyle}>Site Survey</span>
          </li>

           {/* Repeat for other steps */}
           <li style={stepItemStyle}>
            <span style={stepIconStyle}>.</span>
            <span style={stepTextStyle}>System Design & Permitting</span>
          </li>


           {/* Repeat for other steps */}
           <li style={stepItemStyle}>
            <span style={stepIconStyle}>.</span>
            <span style={stepTextStyle}>Installation Design & Inspection</span>
          </li>


           {/* Repeat for other steps */}
           <li style={stepItemStyle}>
            <span style={stepIconStyle}>.</span>
            <span style={stepTextStyle}>Power on</span>
          </li>
        </ul>
      </div>
  
      )
      
     
    } else {
      return (
        <StepForm
          step={currentStep}
          onNext={handleNextStep}
          handleInputChange={handleInputChange}
          onFormSubmit={handleSubmit}
          formData={formData}
          
          validateInput={validateInput}
          validationErrors={validationErrors}
        />
      );
    }
  };

  return <section style={heroSectionStyles}>
    
    <div style={overlayStyle}></div> 
    {renderStepContent()}

  </section>;
};

export default LeadIntakeHero;



































