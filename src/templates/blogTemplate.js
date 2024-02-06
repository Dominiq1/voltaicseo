import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import NavigationBar from '../components/NavigationBar';
import SEO from '../components/seo';

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  // Check if the post exists
  if (!post) {
    return <p>No post found</p>;
  }

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <NavigationBar />
      <article>
        <header style={{ 
          background: `url(${post.frontmatter.featuredImage}) no-repeat center center`, 
          backgroundSize: 'cover', 
          padding: '5rem 1rem', 
          textAlign: 'center' 
        }}>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section style={{ padding: '2rem 5%', lineHeight: '1.6' }}>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </section>
      </article>
    </Layout>
  );
};

export default BlogPostTemplate;
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
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
    }
  }
`;
