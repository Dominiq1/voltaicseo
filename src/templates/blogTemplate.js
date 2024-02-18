import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import NavigationBar from '../components/NavigationBar';

import SEO from '../components/seo';
import { Helmet } from 'react-helmet';
import solarHouseImage from "../images/solar.jpg"
import Contact from '../components/Contact'
import LeadIntakeHero from '../components/LeadIntake';


// ... (other imports remain the same)

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark: post } = data;
  const featuredImage = post?.frontmatter?.featuredImage?.childImageSharp?.fluid?.src;

  return (
    <Layout isFullWidth={true}>
      <SEO title={post?.frontmatter?.title || 'Blog Post'} description={post?.excerpt || ''} />
      <NavigationBar />
      <article>
        <header style={{
          padding: '5rem 1rem',
          textAlign: 'center',
          backgroundImage: `url(${featuredImage || solarHouseImage})`,
          backgroundSize: 'cover',
          color: '#fff',
          height: '50vh',
          fontFamily: "'Open Sans', sans-serif", // Apply the same font family here
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '0.5rem'
          }}>{post?.frontmatter?.title || 'Blog Title'}</h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#ddd'
          }}>{post?.frontmatter?.date || 'Blog Date'}</p>



        </header>
        <section style={{
          padding: '2rem 5%',
          lineHeight: '1.75',
          backgroundColor: '#f8f8f8',
          color: '#333',
          maxWidth: '800px',
          margin: '0 auto',
          fontFamily: "'Open Sans', sans-serif", // This ensures content uses "Open Sans"
        }}>
          <div dangerouslySetInnerHTML={{ __html: post?.html || 'No Content' }} />
        </section>
      </article>

      <LeadIntakeHero slug={post?.fields?.slug}/>

  
    </Layout>
  );
};



export default BlogPostTemplate;
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
      
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      
        

      
      excerpt(pruneLength: 160)
    }
  }
`;

