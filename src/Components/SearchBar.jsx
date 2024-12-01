// SearchBar.jsx
import React from "react";
import PropTypes from "prop-types";

function SearchBar({ onSearch }) {
  return (
    <div className="search-bar my-4 border-2 rounded-lg border-Border-corner shadow-boxShadow-top-only ">
      <input
        type="text"
        placeholder="plants name..."
        onChange={(e) => onSearch(e.target.value)}
        className="p-2 border-none   rounded-lg w-72 "


      />
      
      
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
