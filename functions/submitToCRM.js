// submitToCrm.js in the functions directory
exports.handler = async (event) => {
    const { name, email, homeSize } = JSON.parse(event.body);
  
    // Your processing and fetching logic here
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully!' }),
    };
  };
  