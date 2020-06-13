import React from 'react';

const SearchIcon = ({ toggleSearchBar }) => {
  return (
    <button className="topbar__search" onClick={toggleSearchBar}>
      <img
        className="topbar__icon"
        src="/assets/images/icons/search-line.svg"
        alt="Search"
      />
    </button>
  );
};

export default SearchIcon;
