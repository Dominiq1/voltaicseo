import React, { useState, useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ProductCard from '../components/ProductCard';
import CategoryMenu from '../components/CategoryMenu';
import HeroSection from '../components/Shop/HeroSection';
import SearchBar from '../components/Shop/SearchBar';
import FilterMenu from '../components/Shop/FilterMenu';
import solarHouseImage from "../images/solar.jpg";
import useWindowWidth from '../hooks/useWindowWidth'; // Custom hook for window width
import NavigationBar from '../components/NavigationBar';
import useDebounce from '../hooks/useDebounce'; // Assuming you have this hook

const Shop = ({ data }) => {
  const windowWidth = useWindowWidth();
  const [activeCategory, setActiveCategory] = useState('solar');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Dynamically generate category and filter options
  const generateCategories = (products) => {
    const categories = new Set();
    products.forEach(product => categories.add(product.node.frontmatter.category.toLowerCase()));
    return [...categories];
  };

  // Use this function to set initial categories in your component state
  const initialCategories = generateCategories(data.allMarkdownRemark.edges);

  // Organize products by category
  const productsByCategory = data.allMarkdownRemark.edges.reduce((acc, { node }) => {
    const category = node.frontmatter.category.toLowerCase();
    if (!acc[category]) acc[category] = [];
    acc[category].push(node);
    return acc;
  }, {});

  useEffect(() => {
    // Automatically select the first product when the category changes
    if (productsByCategory[activeCategory]?.length > 0) {
      setSelectedProduct(productsByCategory[activeCategory][0]);
    }
  }, [activeCategory, productsByCategory]);

  useEffect(() => {
    // Implement search functionality here based on debouncedSearchTerm
    // This could involve setting a filtered list of products based on the search term
  }, [debouncedSearchTerm]);

  const handleCategorySelect = category => {
    setActiveCategory(category);
    setSelectedProduct(null); // Reset selected product when changing category
  };

  const handleProductSelect = product => setSelectedProduct(product);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Reusable grid style modified to adjust for different screen sizes
  const gridStyle = {
    overflowY: 'auto',
    display: 'grid',
    gridTemplateColumns: windowWidth < 768 ? 'repeat(2, 1fr)' : 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '10px',
    padding: '0 20px',
  };

  return (
    <Layout isFullWidth>
      <SEO title="Shop" description={selectedProduct?.frontmatter.description} keywords={selectedProduct?.frontmatter.keywords.join(", ")} />
      <NavigationBar/>
      <HeroSection image={solarHouseImage} content="Together we can make change" />
      <SearchBar placeholder="What are you looking for?" onChange={handleSearch} />

      <div style={{ display: 'flex', flexDirection: windowWidth < 768 ? 'column' : 'row', justifyContent: 'space-between', margin: '20px' }}>
        <FilterMenu categories={initialCategories} onSelect={handleCategorySelect} />
        <CategoryMenu categories={initialCategories} onSelect={handleCategorySelect} activeCategory={activeCategory} />
      </div>

      <div style={gridStyle}>
        {productsByCategory[activeCategory]?.map(node => (
          <ProductCard key={node.id} post={node} onClick={() => handleProductSelect(node)} />
        ))}
      </div>

    </Layout>
  );
};

export default Shop;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
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


























// import React, { useState, useEffect } from 'react';
// import { graphql, Link } from 'gatsby';
// import Layout from '../components/layout';
// import SEO from '../components/seo';
// import ProductCard from '../components/ProductCard';
// import CategoryMenu from '../components/CategoryMenu';
// import solarHouseImage from "../images/solar.jpg";
// import HeroSection from '../components/Shop/HeroSection';
// import SearchBar from '../components/Shop/SearchBar';
// import FilterMenu from '../components/Shop/FilterMenu';






// const Shop = ({ data }) => {
//   const [activeCategory, setActiveCategory] = useState('solar');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const isMobile = windowWidth < 768;

//   // Organize posts by category
//   const postsByCategory = data.allMarkdownRemark.edges.reduce((acc, { node }) => {
//     const category = node.frontmatter.category.toLowerCase();
//     if (!acc[category]) acc[category] = [];
//     acc[category].push(node);
//     return acc;
//   }, {});


//   const productGridStyle = {
//     overflowY: 'auto',
//     display: 'grid',
//     gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fill, minmax(250px, 1fr))',
//     gap: '10px',
//     padding: '0 20px',
//   };

//   useEffect(() => {
//     // Automatically select the latest post
//     if (data.allMarkdownRemark.edges.length > 0) {
//       setSelectedPost(data.allMarkdownRemark.edges[0].node);
//     }
//   }, [data.allMarkdownRemark.edges]);

//   const handleCategorySelect = category => setActiveCategory(category);
//   const handlePostSelect = post => setSelectedPost(post);

//   return (
//     <Layout isFullWidth={true}>
//       <SEO title="Shop" description={selectedPost?.frontmatter.description} keywords={selectedPost?.frontmatter.keywords.join(", ")} />

//       <HeroSection image={solarHouseImage} content="Together we can make change" />
//     <SearchBar placeholder="What are you looking for?" />
    
//       <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', margin: '20px' }}>
//         <FilterMenu categories={Object.keys(postsByCategory)} onSelect={handleCategorySelect} />
//       </div>

//       <CategoryMenu categories={Object.keys(postsByCategory)} onSelect={handleCategorySelect} activeCategory={activeCategory} />

//       <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', padding: '20px' }}>
//         {postsByCategory[activeCategory]?.map(node => (
//           <ProductCard key={node.id} post={node} onClick={() => handlePostSelect(node)} />
//         ))}
//       </div>

//     </Layout>
//   );
// };

// export default Shop;

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             description
//             keywords
//             date(formatString: "MMMM DD, YYYY")
//             category
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `;
