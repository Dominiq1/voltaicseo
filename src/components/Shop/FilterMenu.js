import React from "react";

const FilterMenu = ({ categories, onSelect }) => {
    const filterMenuStyle = {
      // define styles for the filter menu here
    };
  
    return (
      <select style={filterMenuStyle} onChange={(e) => onSelect(e.target.value)}>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    );
  };
  


  export default FilterMenu;