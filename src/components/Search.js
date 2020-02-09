import React from 'react';

const Search = () => (
   
	<form action="text"  className ="global-search">
    <div className="search-icon"><img src="../../images/search.svg" alt="search-icon"/></div>
    <input type="text" name="TitleSearch" placeholder="Search for a movie by title..." />
    </form>
    
);

export default Search;