const fetch = require('node-fetch');

exports.handler = async (event) => {
  console.log("Function submitLead was called");

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Adjusted to match the form fields from your multi-step form
  const { utilityBillCost, email, name, phoneNumber, homeOwnership, slug } = JSON.parse(event.body);

  const zapierWebhook = 'https://hooks.zapier.com/hooks/catch/8338143/3lse903/';

  try {
    // Sending the updated payload to Zapier or your chosen endpoint
    const zapierResponse = await fetch(zapierWebhook, {
      method: 'POST',
      body: JSON.stringify({ 
        utilityBillCost, 
        email, 
        name, 
        phoneNumber, 
        homeOwnership,
        slug
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!zapierResponse.ok) {
      // Handle error response from Zapier
      return { statusCode: zapierResponse.status, body: 'Error submitting to Zapier' };
    }

    // Successful submission to Zapier
    return { statusCode: 200, body: JSON.stringify({ message: 'Form submitted successfully!' }) };
  } catch (error) {
    // Handle fetch error
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
