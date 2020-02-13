import React from 'react';
import searchIcon from '../images/search.svg';

const Search = ({ handleInput, search }) => (
    
    <section className="searchbox-wrap"> 
        <span className="search-icon"><img src={searchIcon} alt="search-icon"/></span>
        <input type="text"
               className="searchbox" 
               placeholder="Search for a movie by title..." 
               onChange={handleInput}
               onKeyPress={search} />
    </section>
);

export default Search;