import React, { useState, useRef } from 'react';
import axios from 'axios';
import movieMaker from '../utilities/movieMaker';
import Search from './Search';
import Results from './Results';

const SearchBar = () => {

    const key = "105647a8db946c3ade8946461fb52b94";
    const search_api = "https://api.themoviedb.org/3/search/movie?api_key=";
    const node = useRef();

    const handleClick = () => {

        setisOpen(false);
        setResult([]);
    };

    const [result, setResult] = useState([]);
    const [isOpen, setisOpen] = useState(false);

    // Handle Search Input
    const handleSearch = (searchEnteredByUser) => {
        const s = searchEnteredByUser;
        if(s !== ''){
            axios(search_api + key + "&query=" + s).then(({ data }) => {
                //https://api.themoviedb.org/3/search/movie?api_key=65a9ed7abe7e75b3c0bf9250934f2b49&query=
                setResult(movieMaker(data.results));
                setisOpen(true);
            });
        }else{
            setResult([]);
        }
    }

    return (
        <div ref={node} className ="search-result-wrapper">
            <Search handleSearch={handleSearch} search={null} />
            {isOpen && <div className="movielist-wrapper"> 
                <Results results={result} handleClick={handleClick}/>
            </div>}
        </div>
    );
}

export default SearchBar;