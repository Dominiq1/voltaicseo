import React from 'react';
import PropTypes from 'prop-types';
import solarHouseImage from "../images/solar.jpg";


// Example of an enhanced ProductCard component
const ProductCard = ({ post, onClick }) => {
    return (
      <div className="product-card" onClick={onClick}>
        <img src={post.frontmatter.image} alt={post.frontmatter.title} />
        <div className="product-info">
          <h3>{post.frontmatter.title}</h3>
          <p>{post.frontmatter.description}</p>
          {/* Interactive elesments */}
          <button className="wishlist-btn">Add to Wishlist</button>
        </div>
      </div>
    );
  };
  
  
  export default ProductCard;
  