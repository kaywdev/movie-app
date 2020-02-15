import React, { useState } from 'react';
import axios from 'axios';
import movieMaker from '../utilities/movieMaker';
import Search from './Search';
import Results from './Results';

const SearchBar = () => {

    const key = "65a9ed7abe7e75b3c0bf9250934f2b49";
    const search_api = "https://api.themoviedb.org/3/search/movie?api_key=";

    const [result, setResult] = useState([]);

    // Handle Search Input
    const handleSearch = (searchEnteredByUser) => {
        const s = searchEnteredByUser;
        axios(search_api + key + "&query=" + s).then(({ data }) => {
            setResult(movieMaker(data.results));
        });
    }

    return (
        <div>
            <Search handleSearch={handleSearch} search={null} />
            <Results results={result} />
        </div>

    );

}

export default SearchBar;
