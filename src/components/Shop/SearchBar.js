import React from "react";



const SearchBar = ({ placeholder }) => {
    const searchBarStyle = {
      // define styles for the search bar here
    };
  
    return (
      <input type="text" placeholder={placeholder} style={searchBarStyle} />
    );
  };
  

  export default SearchBar;