import React from 'react';
import PropTypes from 'prop-types';

const CategoryMenu = ({ categories, onSelect, activeCategory }) => {
  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          style={{ fontWeight: activeCategory === category ? 'bold' : 'normal' }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

CategoryMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  activeCategory: PropTypes.string.isRequired,
};

export default CategoryMenu;
