// src/templates/blogTemplate.js
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NavigationBar from '../components/NavigationBar';
import LeadIntakeHero from '../components/LeadIntake';
import solarHouseImage from "../images/solar.jpg";

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark: post } = data;
  const backgroundImageUrl = post.frontmatter.featuredImage
    ? post.frontmatter.featuredImage.childImageSharp.fluid.src
    : solarHouseImage; // Use solarHouseImage as a fallback

  return (
    <Layout isFullWidth={true}>
      <SEO 
        title={post.frontmatter.title || 'Blog Post'} 
        description={post.frontmatter.description || ''}
        keywords={post.frontmatter.keywords?.join(', ')}
        slug={post.fields.slug}
      />
      <NavigationBar />
      <article>
      <header style={{
  padding: '5rem 1rem',
  textAlign: 'center',
  backgroundImage: `url(${backgroundImageUrl})`, // Set the background image
  backgroundSize: 'cover',
  backgroundPosition: 'center center', // Centers the background image
  color: '#fff',
  height: '50vh',
  display: 'flex', // Use flexbox for centering
  flexDirection: 'column', // Stack children vertically
  justifyContent: 'center', // Center vertically
  alignItems: 'center', // Center horizontally
  fontFamily: "'Open Sans', sans-serif",
  position: 'relative', // Add relative positioning to allow absolute positioning of overlay
}}>
  {/* Overlay */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
  }}></div>

  <h1 style={{ 
    fontSize: '2rem', // Start with a smaller base font size
    marginBottom: '0.5rem',
    maxWidth: '95%', // Ensure the text doesn't touch the edges
    wordWrap: 'break-word', // Ensures text breaks to prevent overflow
    position: 'relative', // Ensure title stays above overlay
    zIndex: 1, // Ensure title stays above overlay
  }}>
    {post.frontmatter.title}
  </h1>
  <p style={{ 
    fontSize: '1.25rem', 
    color: '#ddd',
    marginTop: '1rem' // Add space between the title and the date
  }}>
    {post.frontmatter.date}
  </p>
</header>


        <section style={{
          padding: '2rem 5%',
          lineHeight: '1.75',
          backgroundColor: '#f8f8f8',
          color: '#333',
          maxWidth: '800px',
          margin: '0 auto',
          fontFamily: "'Open Sans', sans-serif",
        }}>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </section>
      </article>

      <LeadIntakeHero slug={post.fields.slug} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        keywords
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
