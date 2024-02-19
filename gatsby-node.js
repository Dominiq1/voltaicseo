const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');




exports.handler = async (event) => {
  const { name, email, homeSize } = JSON.parse(event.body);
  
  // Process the data, send it to the CRM, and send an email
  // This will depend on your CRM's API and your email service provider
  // Define the data you want to send
const testData = {
  name: name,
  email: email,
  homeSize: homeSize
};


  //Zapier catch hook : 

  // Use fetch to send a POST request to the Zapier webhook
fetch('https://hooks.zapier.com/hooks/catch/8338143/3lse903/', {
  method: 'POST',
  body: JSON.stringify(testData),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});




  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Form submitted successfully!' }),
  };




};

//Working
// gatsby-node.js

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // Check if the node is a MarkdownRemark node
  if (node.internal.type === `MarkdownRemark`) {
    // If a slug is provided in the frontmatter, use it; otherwise, generate one
    const slug = node.frontmatter.slug || createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};



// gatsby-node.js

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw new Error('Error fetching Markdown slugs', result.errors);
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug, // Use the generated slug for the page path
      component: path.resolve(`./src/templates/blogTemplate.js`),
      context: {
        // Pass the slug into the template to use in page query
        slug: node.fields.slug,
      },
    });
  });







  
};


exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  // Define types for your frontmatter if necessary
  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      slug: String
      featuredImage: File @fileByRelativePath
    }
    type Fields {
      slug: String
    }
  `);
};