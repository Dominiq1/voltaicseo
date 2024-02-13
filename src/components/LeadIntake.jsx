// import React, { useState } from 'react';
// import solarHouseImage from '../images/solar.jpg'; // Adjust the path as necessary
// import '../styles/leadIntake.css'; // Adjust the path based on your file structure



// const heroSectionStyles = {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between', // This will spread out the top and bottom content
//     position: 'relative',
//     color: '#fff',
//     backgroundImage: `url(${solarHouseImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '100vh', // Take up the full height of the viewport
//     padding: '4rem 1rem',
//     width: '100%',
//     zIndex: 1,
//   };
  


// const inputStyles = {
//   width: '100%',
//   margin: '0.5rem 0',
//   padding: '0.5rem',
//   borderRadius: '2px',
//   border: '1px solid #ccc',
// };
// const buttonStyles = {
//     width: 'calc(100% - 2rem)', // Full width minus padding on either side
//     maxWidth: '500px', // Maximum button width
//     height: '50px', // Fixed height for all buttons
//     margin: '1rem auto', // Margin top and bottom, auto on the sides for center alignment
//     padding: '0.5rem 1rem',
//     backgroundColor: '#008ca8', // Button background color
//     color: '#fff', // Button text color
//     borderRadius: '25px', // Rounded corners
//     border: 'none',
//     cursor: 'pointer',
//     display: 'block', // Display as a block to fill width of container
//     fontSize: '1rem', // Font size for button text
//     textAlign: 'center', // Center the text inside the button
//   };
//   // This container centers the content and buttons vertically and horizontally
// const centeredContentStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center', // Center vertically
//     alignItems: 'center', // Center horizontally
//     height: '100%', // Take up the entire height of the parent
//     textAlign: 'center', // Center text for all children
//     padding: '1rem', // Padding around the content
//     boxSizing: 'border-box', // Make sure padding doesn't affect the width
//   };


// const overlayStyle = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     zIndex: 2, // Overlay should be just above the background image
// };

  
//   const buttonContainerStyle = {
//     position: 'relative',
//     bottom: '25%',
//     left: 0,
//     right: 0,
//     textAlign: 'center',
//     zIndex: 4, // Ensure this is higher than the overlay's z-index
// };

  

//   const formContainerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center', // Center the form elements
//     width: '100%', // Use full width to spread out the form elements
//     marginTop: '2rem', // Add space above the form
//     zIndex: 9
//   };

// const responsiveStyles = `
// @media (max-width: 768px) {
//   .hero-heading,
//   .hero-subheading {
//     text-align: left; // Adjusted alignment for smaller screens
//     width: 100%;
//     margin-left: 0;
//   }
//   .hero-input,
//   .hero-button {
//     width: 100%; // Adjusted width for smaller screens
//     margin: 0.5rem 0;
//   }
// }
// `;



// // Component for individual form steps
// const StepForm = ({ step, onNext, onChange, onFormSubmit, formData, validateInput, validationErrors, currentStep }) => {




  
//   const goToNextStep = (newStep) => () => {
//     let isValid = true;
  
//     // Validate current step's input before moving to the next
//     switch (currentStep) {
//       case 1:
//         // Example: No specific validation on the initial button click
//         break;
//       case 2:
//         isValid = validateInput('homeOwnership', formData.homeOwnership);

//         break;
//       case 3:
//         isValid = validateInput('utilityBillCost');
//         break;
//       case 4:
//         isValid = validateInput('email');
//         break;
//       case 5:
//         isValid = validateInput('name');
//         break;
//       default:
//         // Handle other cases or default validation
//         break;
//     }
  
//     if (!isValid) {
//       return; // Stop the next step if validation fails
//     }
  
//     onNext(newStep);
//   };
  
//   // Depending on the step, return different form elements
//   switch (step) {
//     // Step 1: Initial button
//     case 1:
//       return (
//         <div style={centeredContentStyle}>

//             <h1> Protect your home today - </h1>
//             <p> See what you could be saving now</p>
//           <button style={buttonStyles} onClick={goToNextStep(2)}>
//             Get My Report
//           </button>
        

//         </div>
//       );
//     // Step 2: Home ownership question
//     case 2:
//       return (
//         <div style={formContainerStyle}>
//           <p>Do you own your own home?</p>
//           <select
//           value={formData.homeOwnership}
//           onChange={(e) => onChange('homeOwnership', e.target.value)}
//           style={inputStyles}
//         >
//   <option value="">Select Home Ownership</option>
//   <option value="Yes">Yes</option>
//   <option value="No">No</option>
// </select>

//           <button style={buttonStyles} onClick={goToNextStep(3)}>Next</button>
       
       
//         </div>
//       );
//     // Step 3: Average electric bill
//     case 3:
//       return (
//         <div style={formContainerStyle}>
//           <p>What is your average electric bill?</p>
//           <select
//             style={inputStyles}
//             value={formData.utilityBillCost}
//             onChange={(e) => onChange('utilityBillCost', e.target.value)}
//           >
//             {/* Replace these options with your actual ranges */}
//             <option value="0-50">$0-50</option>
//             <option value="51-100">$51-100</option>
//             <option value="101-150">$101-150</option>
//             {/* ... other options ... */}
//           </select>
//           <button style={buttonStyles} onClick={goToNextStep(4)}>Next</button>
//         </div>
//       );
//     // Step 4: Email address input
//     case 4:
//   return (
//     <div style={formContainerStyle}>
//       <p>Enter your Email Address</p>
//       <input
//   type="email"
//   className={validationErrors.email ? 'shake' : ''}
//   placeholder="Email Address"
//   value={formData.email}
//   onChange={(e) => onChange('email', e.target.value)}
//   required
//   style={inputStyles}
// />


//       <button style={buttonStyles} onClick={goToNextStep(5)}>Next</button>
//     </div>
//   );

//     // Step 5: Name input
//     case 5:
//       return (
//         <div style={formContainerStyle}>
//           <p>What's your name?</p>
//           <input
//             type="text"
//             placeholder="Full Name"
//             value={formData.name}
//             className={validationErrors.name ? 'shake' : ''}
//             onChange={(e) => onChange('name', e.target.value)}
//             style={inputStyles}
//           />
//           <button style={buttonStyles} onClick={goToNextStep(6)}>Next</button>
//         </div>
//       );
//     // Step 6: Final submission step
//     // Step 6: Final submission step
//     case 6:
//       return (
//         <div style={formContainerStyle}>
//           <p>Please confirm your details and submit the form.</p>
//           <input
//             type="tel"
//             className={validationErrors.phoneNumber ? 'shake' : ''}
//             placeholder="Phone Number"
//             value={formData.phoneNumber}
//             onChange={(e) => onChange('phoneNumber', e.target.value)}
//             required  // Make phone number input required
//             style={inputStyles}
//           />
//           <button style={buttonStyles} onClick={onFormSubmit}>
//             Submit
//           </button>
//         </div>
//       );
//     // Add additional cases for more steps if needed
//     default:
//       return null;
//   }
  
// };

// const LeadIntakeHero = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     homeOwnership: '',
//     utilityBillCost: '',
//   });
  

//   const [currentStep, setCurrentStep] = useState(1);
//   const [formSubmitted, setFormSubmitted] = useState(false);
  
 
//   const [validationErrors, setValidationErrors] = useState({
//     name: false,
//     email: false,
//     phoneNumber: false,
//     homeOwnership: false,
//     utilityBillCost: false,
//   });


//   const validateInput = (field, value = '') => {


//     if (!value.trim()) {
//       setValidationErrors(prev => ({ ...prev, [field]: true }));
//       setTimeout(() => {
//         setValidationErrors(prev => ({ ...prev, [field]: false }));
//       }, 500);
//       return false;
//     }
//     return true;
//   };
  

  
//   const handleInputChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const handleNextStep = (nextStep) => {
//     setCurrentStep(nextStep);
//   };

//   const handleSubmit = async (event) => {

    
//     event.preventDefault();


    

//     // Validate all required fields before submission
//     const validations = [
//       validateInput('name'),
//       validateInput('homeOwnership'),
//       validateInput('email'),
//       validateInput('phoneNumber'),
//       // Add other fields as necessary
//     ];
  
//     // If any validation fails, stop the submission
//     if (validations.some(isValid => !isValid)) {
//       return;
//     }
//     // Assuming formData is your form data state
//     const { utilityBillCost, email, name, phoneNumber, homeOwnership } = formData;
    
//     try {
//       const response = await fetch('/.netlify/functions/submitLead', {
//         method: 'POST',
//         body: JSON.stringify({ utilityBillCost, email, name, phoneNumber, homeOwnership }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
  
//       setFormSubmitted(true);
//     } catch (error) {
//       console.error('There was an error submitting the form:', error);
//     }
//   };
  
//   const renderStepContent = () => {
//     if (formSubmitted) {
//       return <h2>Good news, you're a great fit!</h2>;
//       // Optionally add more content or redirect the user
//     } else {
//       return (
//         <StepForm
//         step={currentStep}
//         onNext={handleNextStep}
//         onChange={handleInputChange}
//         onFormSubmit={handleSubmit}
//         formData={formData}
//         validateInput={validateInput}
//         validationErrors={validationErrors} // passing validationErrors as a prop
//         setValidationErrors={setValidationErrors} // passing setValidationErrors as a prop
       
//          // Ensure this is passed if used within StepForm
//       />
      
//       );
//     }
//   };

//   // Main component return
//   return (
//     <section style={heroSectionStyles}>
//       {/* Add any additional markup and styles here */}
//       {renderStepContent()}
//     </section>
//   );
// };

// export default LeadIntakeHero;


// =======================














//// ==============


import React, { useState } from 'react';
import solarHouseImage from '../images/solar.jpg'; // Adjust the path as necessary
import '../styles/leadIntake.css'; // Adjust the path based on your file structure

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

const inputStyles = {
  width: '100%',
  margin: '0.5rem 0',
  padding: '0.5rem',
  borderRadius: '2px',
  border: '1px solid #ccc',
};

const buttonStyles = {
  width: 'calc(100% - 2rem)',
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
};

const formContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginTop: '2rem',
  zIndex: 9,
};

const StepForm = ({
  step,
  onNext,
  onChange,
  onFormSubmit,
  formData,
  validateInput,
  validationErrors,
}) => {
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

            <h1> Protect your home today - </h1>
            <p> See what you could be saving now</p>
          <button style={buttonStyles} onClick={goToNextStep(2)}>
            Get My Report
          </button>
        

        </div>
      );
    // Step 2: Home ownership question
    case 2:
      return (
        <div style={formContainerStyle}>
          <p>Do you own your own home?</p>
          <select
          value={formData.homeOwnership}
          onChange={(e) => onChange('homeOwnership', e.target.value)}
          style={inputStyles}
        >
  <option value="">Select Home Ownership</option>
  <option value="Yes">Yes</option>
  <option value="No">No</option>
</select>

          <button style={buttonStyles} onClick={goToNextStep(3)}>Next</button>
       
       
        </div>
      );
    // Step 3: Average electric bill
    case 3:
      return (
        <div style={formContainerStyle}>
          <p>What is your average electric bill?</p>
          <select
            style={inputStyles}
            value={formData.utilityBillCost}
            onChange={(e) => onChange('utilityBillCost', e.target.value)}
          >
            {/* Replace these options with your actual ranges */}
            <option value="0-50">$0-50</option>
            <option value="51-100">$51-100</option>
            <option value="101-150">$101-150</option>
            {/* ... other options ... */}
          </select>
          <button style={buttonStyles} onClick={goToNextStep(4)}>Next</button>
        </div>
      );
    // Step 4: Email address input
    case 4:
  return (
    <div style={formContainerStyle}>
      <p>Enter your Email Address</p>
      <input
  type="email"
  className={validationErrors.email ? 'shake' : ''}
  placeholder="Email Address"
  value={formData.email}
  onChange={(e) => onChange('email', e.target.value)}
  required
  style={inputStyles}
/>


      <button style={buttonStyles} onClick={goToNextStep(5)}>Next</button>
    </div>
  );

    // Step 5: Name input
    case 5:
      return (
        <div style={formContainerStyle}>
          <p>What's your name?</p>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            className={validationErrors.name ? 'shake' : ''}
            onChange={(e) => onChange('name', e.target.value)}
            style={inputStyles}
          />
          <button style={buttonStyles} onClick={goToNextStep(6)}>Next</button>
        </div>
      );
    // Step 6: Final submission step
    // Step 6: Final submission step
    case 6:
      return (
        <div style={formContainerStyle}>
          <p>Please confirm your details and submit the form.</p>
          <input
            type="tel"
            className={validationErrors.phoneNumber ? 'shake' : ''}
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) => onChange('phoneNumber', e.target.value)}
            required  // Make phone number input required
            style={inputStyles}
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
  // switch (step) {
  //   case 1:
  //     return (
  //       <div style={centeredContentStyle}>
  //         <h1>Protect your home today -</h1>
  //         <p>See what you could be saving now</p>
  //         <button style={buttonStyles} onClick={goToNextStep(2)}>
  //           Get My Report
  //         </button>
  //       </div>
  //     );
  //   case 2:
  //   // Similar for other cases
  //   case 6:
  //     return (
  //       <div style={formContainerStyle}>
  //         <p>Please confirm your details and submit the form.</p>
  //         <input
  //           type="tel"
  //           className={validationErrors.phoneNumber ? 'shake' : ''}
  //           placeholder="Phone Number"
  //           value={formData.phoneNumber}
  //           onChange={(e) => onChange('phoneNumber', e.target.value)}
  //           required
  //           style={inputStyles}
  //         />
  //         <button style={buttonStyles} onClick={onFormSubmit}>
  //           Submit
  //         </button>
  //       </div>
  //     );
  //   default:
  //     return null;
  // }
};

const LeadIntakeHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    homeOwnership: '',
    utilityBillCost: '',
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
    setFormData({ ...formData, [field]: value });
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
      return <h2>Good news, you're a great fit!</h2>;
    } else {
      return (
        <StepForm
          step={currentStep}
          onNext={handleNextStep}
          onChange={handleInputChange}
          onFormSubmit={handleSubmit}
          formData={formData}
          validateInput={validateInput}
          validationErrors={validationErrors}
        />
      );
    }
  };

  return <section style={heroSectionStyles}>{renderStepContent()}</section>;
};

export default LeadIntakeHero;
