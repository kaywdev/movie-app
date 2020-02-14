import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Components
import Year from './Year';
import Chart from './Chart';
import MovieGrid from './MovieGrid';
import Search from './Search';
import Results from './Results';
import movieMaker from '../utilities/movieMaker';

// Utilities

/** 
 * 
 * 
 * URL: 
 * 
 * API Key:
 * 
 * Base URL:
 * 
 * 
*/

const Home = (props) => { 

    const key = "65a9ed7abe7e75b3c0bf9250934f2b49";
    const search_api = "https://api.themoviedb.org/3/search/movie?api_key=";

    //const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);
    
    //const [selected, setSelected] = useState({});

    // set the variables that we want react to keep track of 
    const [movieData, setMovieData] = useState(null);
    //movieData is the variable and setMovieData is the function to update that variable

    //setting the current year as initial year
    const d = new Date();
    const y = d.getFullYear();
    const [year, setYear] = useState(y);
    
    //setting popularity as initial topic of search
    const [chart, setChart] = useState('popular');

    //[call back, when do we want the call back?]
    useEffect(() =>{
        // fetch our movie data using fetch API (native JS)
        // - setup an "async / await" to wait for the returned data
        //from the movieAPI
        const fetchMovies = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/movie/${chart}?api_key=${key}&language=en-US&page=1&primary_release_year=${year}`);
            //console.log(`https://api.themoviedb.org/3/movie/${chart}?api_key=${key}&language=en-US&page=1&primary_release_year=${year}`);
            let data = await res.json();
            
            const formattedmovieData = movieMaker(data.results);
            setMovieData(formattedmovieData);
            //console.log('formatted data in Home.js ' + formattedmovieData);
        }

        fetchMovies();
    }, [year, chart]);

    // State Change Methods
    const handleChangeYear = (year) => {
        setYear(year);
    }

    const handleChangeChart = (chart) => {
        setChart(chart);
    }

    // Handle Search Input
    const handleSearch = (searchEnteredByUser) => {
        const s = searchEnteredByUser;
        axios(search_api + key + "&query=" + s).then(({ data }) => {
            setResult(data.results);
        });
    }

    return (
        <main> 
            <Search handleSearch={handleSearch} search={null}/>
            <Results results={result} />
            <section className= "sort-movies">
            <Chart 
                chart={chart} 
                handleChangeChart={handleChangeChart}/>
            <Year 
                year={year} 
                handleChangeYear={handleChangeYear}/>
            </section>
            <section className="movie-lists">
            {movieData && <MovieGrid movieData={movieData}/>}
            </section> 
        </main>
    );
}

export default Home;

