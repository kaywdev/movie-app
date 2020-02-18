import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import movieMaker from '../utilities/movieMaker';
import Search from './Search';
import Results from './Results';

const SearchBar = () => {

    const key = "65a9ed7abe7e75b3c0bf9250934f2b49";
    const search_api = "https://api.themoviedb.org/3/search/movie?api_key=";
    const node = useRef();

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);

        // return function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };

    }, []);

    const handleClick = e => {
        if (node.current.contains(e.target)) {
          // inside click
          return;
        }

        // outside click 
        setResult([]);
    };

    const [result, setResult] = useState([]);

    // Handle Search Input
    const handleSearch = (searchEnteredByUser) => {
        const s = searchEnteredByUser;
        if(s !== ''){
            axios(search_api + key + "&query=" + s).then(({ data }) => {
                setResult(movieMaker(data.results));
            });
        }else{
            setResult([]);
        }
    }

    return (
        <div ref={node} className ="search-result-wrapper">
            <Search handleSearch={handleSearch} search={null} />
            <div className="movielist-wrapper">
                <Results results={result} onClick={()=>handleClick}/>
            </div>
        </div>
    );
}

export default SearchBar;