import React, { useState, useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Accordion from '../components/Accordion'; // Ensure this component is prepared to handle the collapsible functionality
import solarHouseImage from "../images/solar.jpg";

const Resources = ({ data }) => {
  const categories = ["solar"];
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  // Organize posts by category
  const postsByCategory = categories.reduce((acc, category) => {
    acc[category] = data.allMarkdownRemark.edges.filter(({ node }) => 
      node.frontmatter.category.toLowerCase() === category.toLowerCase()
    );
    return acc;
  }, {});

  useEffect(() => {
    // Set the selectedPost state to the latest post
    if (data.allMarkdownRemark.edges.length > 0) {
      setSelectedPost(data.allMarkdownRemark.edges[0].node);
    }
  }, [data.allMarkdownRemark.edges]); // Dependency array ensures this effect only runs once

  const toggleCategory = category => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  const handlePostClick = post => {
    setSelectedPost(post);
  };

  const displayTitle = selectedPost ? selectedPost.frontmatter.title : "";
  const seoDescription = selectedPost ? selectedPost.frontmatter.description : "";
  const seoKeywords = selectedPost ? selectedPost.frontmatter.keywords.join(", ") : "";

  const readMoreLink = selectedPost ? selectedPost.fields.slug : "";

  return (
    <Layout isFullWidth={true}>
      <SEO title="Resources" description={seoDescription} keywords={seoKeywords} />
      <div className="resources-container" style={{ padding: '20px' }}>
        <img src={solarHouseImage} alt="Solar House" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '20px' }} />
        <h1 style={{ paddingBottom: '10px' }}>{displayTitle}</h1>
        <Link to={readMoreLink}>
          <button style={{
            height: '3em', 
            width: 'calc(100% - 1rem)', 
            backgroundColor: 'black', 
            color: 'white', 
            fontWeight: 'bold', 
            borderRadius: '10px', 
            marginBottom: '20px'
          }}>
            Read more →
          </button>
        </Link>
        {/* Rest of the component */}
        <div className="accordion-container" style={{ 
          paddingTop: '20px',
          maxHeight: '500px', // Set a fixed max height
          overflowY: 'auto' // Enable vertical scrolling
        }}> 
          {categories.map(category => (
            <Accordion 
              key={category} 
              title={category}
              isActive={activeCategory === category}
              onClick={() => toggleCategory(category)}
            >
              {activeCategory === category && postsByCategory[category].map(({ node }) => (
                <div onClick={() => handlePostClick(node)} key={node.id} className="post-link" style={{ padding: '10px 0' }}>
                  <h2>{node.frontmatter.title}</h2>
                </div>
              ))}
            </Accordion>
          ))}
        </div>
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
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            keywords
            date(formatString: "MMMM DD, YYYY")
            category
          }
          excerpt
        }
      }
    }
  }
`;
