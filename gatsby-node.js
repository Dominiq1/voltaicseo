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



exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    // Use the slug from the frontmatter if it exists
    const slugFromFrontmatter = node.frontmatter && node.frontmatter.slug;
    const slug = slugFromFrontmatter || createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/blogTemplate.js');
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

  // Error handling
  if (result.errors) {
    console.error(result.errors);
    throw new Error('There was an error fetching posts', result.errors);
  }

  // Page creation
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,

      },
    });
  });


   // Create blog home page
   createPage({
    path: `/resources`,
    component: path.resolve(`./src/templates/Resources.js`),
    context: {},
  });





  
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemarkFrontmatter {
      title: String
      subTitle: String
      description: String
      keywords: [String]
      date: Date @dateformat
      slug: String
      featuredImage: File @fileByRelativePath
      category: String
    }
    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
    }
  `;
  createTypes(typeDefs);
};
