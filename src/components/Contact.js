import React, {useState, useEffect} from "react";

// Define the styles as objects
const contactSectionStyles = {
    backgroundColor: "#f7f7f7",
    padding: "2rem 1rem", // Smaller padding on mobile
    textAlign: "center", // Center text for mobile
  };
  
  const inputStyles = {
    width: "100%", // Full width
    padding: "10px",
    margin: "10px 0",
    // Add any additional base styles for the input
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
  
  

const ContactSection = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setIsSubmitting(true);
  
      const formData = {
        name: event.target.elements.name.value,
        phoneNumber: event.target.elements.phoneNumber.value,
        utilityBillCost: event.target.elements.utilityBillCost.value,
      };
  
      try {
        // Your form submission logic here
        // Use formData to submit to your backend
        console.log("Form Data:", formData);
  
        // Example: Sending data to a Netlify function
        const response = await fetch('/.netlify/functions/submitToCrm', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        setFormSubmitted(true);
      } catch (error) {
        console.error('There was an error submitting the form:', error);
      } finally {
        setIsSubmitting(false);
      }
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
          <input name="phoneNumber" type="tel" placeholder="Phone Number" style={inputStyles} />
          <select name="utilityBillCost" required style={inputStyles}>
            <option value="">Select your utility bill cost</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button type="submit" style={buttonStyles} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </section>
    );
  };
  export default ContactSection;