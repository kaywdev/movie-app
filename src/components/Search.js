import React from 'react';
import searchIcon from '../images/search.svg';
import Home from './Home';

const Search = ({ handleSearch }) => {

    

    const handleFormSubmit = (e) => {
            e.preventDefault();
            handleSearch(e.target.value);
            //console.log('in change: '+e.target.value);
            //console.log(e.target.value.length);
    }
    const handleFormKeySubmit = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch(e.target.value);
                //console.log('in enter: '+e.target.value);
            }
    }
    
    return (
        <section className="searchbox-wrap"> 
            <span className="search-icon">
                <img src={searchIcon} alt="search-icon"/></span>
            <form>
                {/* label sholud be hidden from HTML by CSS */}
                <label htmlFor="search" className="sr-only">Search: </label> 
                <input type="text"
                    id="search"
                    name="search"
                    className="searchbox" 
                    placeholder="Search for a movie by title..."
                    onChange={handleFormSubmit} 
                    onKeyPress={handleFormKeySubmit}
                    />
            </form>
        </section> 
    );
};

export default Search;