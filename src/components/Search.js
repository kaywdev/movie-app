import React from 'react';
import searchIcon from '../images/search.svg';
const Search = () => (
   
	<form action="text"  className ="global-search">
    <div className="search-icon"><img src={searchIcon} alt="search-icon"/></div>
    <input type="text" name="TitleSearch" placeholder="Search for a movie by title..." />
    </form>
    
);

export default Search;