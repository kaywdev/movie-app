import React, { useState, useEffect } from 'react';
// Components
import Year from './Year';
import Chart from './Chart';
import MovieGrid from './MovieGrid';
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

    const key = "6bc37b6dd53eb4c2d3a0e11217b72415";

    // set the variables that we want react to keep track of 
    const [movieData, setMovieData] = useState(null);
    //movieData is the  variable and setMovieData is the function to update that variable
    //const [year, setYear] = useState(props.year);

    //setting the current year as initial year
    const d = new Date();
    const y = d.getFullYear();
    const [year, setYear] = useState(y);
    
    //setting popularity as initial topic of search
    const [chart, setCountry] = useState('popular');

    //[call back, when do we want the call back?]
    useEffect(() =>{
        // fetch our weather data using fetch API (native JS)
        // - setup an "async / await" to wait for the returned data
        //from the openWeatherAPI
        const fetchMovies = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/movie/${chart}?api_key=${key}&language=en-US&page=1&primary_release_year=${year}`);
            console.log(`https://api.themoviedb.org/3/movie/${chart}?api_key=${key}&language=en-US&page=1&primary_release_year=${year}`);
            let data = await res.json();
            
            console.log('home.js line 50: '+data);
            console.log( 'home.js line 51: '+year);
            console.log('home.js line 52: '+chart);
            
            
            const formattedmovieData = movieMaker(data.results);
            setMovieData(formattedmovieData);
            console.log(formattedmovieData);
        }

        fetchMovies();
    }, [year, chart]);

    // State Change Methods
    const handleChangeYear = (year) => {
        setYear(year);
    }

    const handleChangeChart = (chart) => {
        setCountry(chart);
    }

    return (
        <main>
            <section>
                <div className="page-info">
                    <h2>Movies</h2>
                    <Year 
                    year={year} 
                    handleChangeYear={handleChangeYear}/>
                    <Chart 
                    chart={chart} 
                    handleChangeChart={handleChangeChart}/>
                </div>       
            </section>
            <div className="movie-grid">
                {movieData && <MovieGrid movieData={movieData}/>}
            </div> 
        </main>
    );
}

export default Home;

