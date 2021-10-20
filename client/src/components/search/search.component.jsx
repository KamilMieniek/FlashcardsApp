import React from 'react';

import './search.styles.scss';
// import { ReactComponent as Logo } from '../../assets/crown.svg';
const Search = () => {
  return (
    <div className="search-wrapper">
      <input className="search-input" type="text" placeholder="Search" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="feather feather-search"
        viewBox="0 0 24 24"
      >
        <defs></defs>
        <circle cx="11" cy="11" r="8"></circle>
        <path d="M21 21l-4.35-4.35"></path>
      </svg>
    </div>
  );
};

export default Search;
