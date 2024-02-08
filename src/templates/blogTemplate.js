import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import NavigationBar from '../components/NavigationBar';
import SEO from '../components/seo';
import { Helmet } from 'react-helmet';


//Doesnt work: 

// ... other imports remain the same

// const BlogPostTemplate = ({ data }) => {
//   const { markdownRemark: post } = data;

//   // Check if the post and the featured image exist
//   const featuredImage = post?.frontmatter?.featuredImage?.childImageSharp?.fluid?.src;

//   return (
//     <Layout>
//       <SEO title={post?.frontmatter?.title || 'Blog Post'} description={post?.excerpt || ''} />
//       <NavigationBar />
//       <article>
//         <header style={{ 
//           padding: '5rem 1rem', 
//           textAlign: 'center',
//           backgroundImage: featuredImage ? `url(${featuredImage})` : undefined,
//           backgroundSize: 'cover',
//         }}>
//           {!featuredImage && <h1>{post?.frontmatter?.title || 'No Title'}</h1>}
//           <p>{post?.frontmatter?.date || 'No Date'}</p>
//         </header>
//         <section style={{ padding: '2rem 5%', lineHeight: '1.6' }}>
//           <div dangerouslySetInnerHTML={{ __html: post?.html || 'No Content' }} />
//         </section>
//       </article>
//     </Layout>
//   );
// };

// ... other imports remain the same

const BlogPostTemplate = ({ data }) => {




  const { markdownRemark: post } = data;

  // Check if the post and the featured image exist
  const featuredImage = post?.frontmatter?.featuredImage?.childImageSharp?.fluid?.src;





  
  return (
    <Layout>


      <SEO title={post?.frontmatter?.title || 'Blog Post'} description={post?.excerpt || ''} />
      <NavigationBar />
      <article>
        <header style={{ 
          padding: '5rem 1rem', 
          textAlign: 'center',
          backgroundImage: featuredImage ? `url(${featuredImage})` : undefined,
          backgroundSize: 'cover',
        }}>
          {!featuredImage && <h1>{post?.frontmatter?.title || 'No Title'}</h1>}
          <p>{post?.frontmatter?.date || 'No Date'}</p>
        </header>
        <section style={{ padding: '2rem 5%', lineHeight: '1.6' }}>
          <div dangerouslySetInnerHTML={{ __html: post?.html || 'No Content' }} />
        </section>
      </article>
    </Layout>
  );
};

// ... the rest of your code remains the same


// ... the rest of your code remains the same



//works
// const BlogPostTemplate = () => {
//   return <div>Blog Post #</div>;
// };

export default BlogPostTemplate;
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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

