import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import NavigationBar from '../components/NavigationBar';
import SEO from '../components/seo';
import defaultImage from "../images/solar.jpg"; // Import a default image

// Define a common font style
const commonFontStyle = {
  fontFamily: "'Open Sans', sans-serif",
};

// Here we define the style for the title, you might have this in a separate CSS file
const titleStyle = {
  fontSize: '1rem', // Adjust font size as needed
  lineHeight: '1.2', // Adjust line height as needed
  margin: '0.5rem 0',
  minHeight: '2.4rem', // Example for two lines of text
  maxHeight: '4.8rem', // Example for four lines of text
  overflow: 'hidden', // Hide overflow
  textOverflow: 'ellipsis', // Add ellipsis to overflow
  display: '-webkit-box',
  WebkitLineClamp: 3, // Limit to three lines
  WebkitBoxOrient: 'vertical',
};

const Resources = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  // Separate the most recent post from the rest
  const latestPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <Layout isFullWidth={true}>
      <SEO title="Blog Home" />
      <NavigationBar />

      {/* Latest post featured at the top */}
      {latestPost && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '2rem' }}>
          <Link to={latestPost.node.fields.slug} style={{ textDecoration: 'none' }}>
            <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
              <img src={latestPost.node.frontmatter.featuredImage?.childImageSharp?.fluid?.src || defaultImage} alt={latestPost.node.frontmatter.title || 'Default Image'} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
              <div style={{ padding: '1rem', ...commonFontStyle }}>
                <h2 style={{ ...titleStyle, fontSize: '1.5rem' }}>{latestPost.node.frontmatter.title}</h2>
                <time>{latestPost.node.frontmatter.date}</time>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Grid for other posts */}
      <div style={{
        ...commonFontStyle,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1rem',
        '@media (max-width: 767px)': {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
      }}>
        {otherPosts.map(({ node }) => {
          const imageUrl = node.frontmatter.featuredImage?.childImageSharp?.fluid?.src || defaultImage;
          return (
            <div key={node.fields.slug} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
              <Link to={node.fields.slug} style={{ textDecoration: 'none' }}>
                <img src={imageUrl} alt={node.frontmatter.title || 'Default Image'} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '0.5rem', ...commonFontStyle }}>
                  <h2 style={{ ...titleStyle }}>{node.frontmatter.title}</h2>
                  <time>{node.frontmatter.date}</time>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Resources;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
