const fetch = require('node-fetch'); // Make sure to include node-fetch if you're using fetch in Node.js

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { name, email, homeSize } = JSON.parse(event.body);

    const data = {
      name,
      email,
      homeSize,
    };

    const zapierResponse = await fetch('https://hooks.zapier.com/hooks/catch/8338143/3lse903/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!zapierResponse.ok) {
      throw new Error('Failed to submit form to Zapier');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully!' }),
    };
  } catch (error) {
    console.error('Error:', error); // Log the error for debugging
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || 'Internal Server Error' }),
    };
  }
};
