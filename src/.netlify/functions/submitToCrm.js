// submitToCrm.js

const fetch = require('node-fetch');

exports.handler = async (event, context) => {

  console.log("Function submitToCrm was called");
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, homeSize } = JSON.parse(event.body);
  const zapierWebhook = 'https://hooks.zapier.com/hooks/catch/8338143/3lse903/';

  try {
    const zapierResponse = await fetch(zapierWebhook, {
      method: 'POST',
      body: JSON.stringify({ name, email, homeSize }),
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
