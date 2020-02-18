import React from 'react';
import searchIcon from '../images/search.svg';

const Search = ({ handleSearch }) => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSearch(e.target.value);
    }

    const handleFormKeySubmit = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch(e.target.value);
        }
    }
    
    return (
        <section className="searchbox-wrap"> 
            <span className="search-icon">
                <img src={searchIcon} alt="search-icon"/></span>
            <form>
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