import React, { useState, useEffect } from 'react';

// Components
import Year from './Year';
import Chart from './Chart';
import MovieGrid from './MovieGrid';
import SearchBar from './SearchBar';
import movieMaker from '../utilities/movieMaker';


const Home = (props) => { 
    
    const key = "105647a8db946c3ade8946461fb52b94";
    //const search_api = "https://api.themoviedb.org/3/search/movie?api_key=";

    // set the variables that we want react to keep track of 
    const [movieData, setMovieData] = useState(null);

    // setting the current year as initial year
    const d = new Date();
    const y = d.getFullYear();
    const [year, setYear] = useState(y);
    
    // setting popularity as initial topic of search
    const [chart, setChart] = useState('popular');

    // [call back, when do we want the call back?]
    useEffect(() =>{
        
        const fetchMovies = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/movie/${chart}?api_key=${key}&language=en-US&page=1&primary_release_year=${year}`);
            let data = await res.json();
            
            const formattedmovieData = movieMaker(data.results);
            setMovieData(formattedmovieData);
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

    return (
        <main> 
            <SearchBar />
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