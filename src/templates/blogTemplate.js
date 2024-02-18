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
      />
      <NavigationBar />
      <article>
        <header style={{
          padding: '5rem 1rem',
          textAlign: 'center',
          backgroundImage: `url(${backgroundImageUrl})`, // Set the background image
          backgroundSize: 'cover',
          color: '#fff',
          height: '50vh',
          fontFamily: "'Open Sans', sans-serif",
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
            {post.frontmatter.title}
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#ddd' }}>
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
