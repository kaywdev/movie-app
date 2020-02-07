import React, { useState, useEffect } from 'react';
// Components
import Location from './Location';
import Filter from './Filter';
import WeatherGrid from './WeatherGrid';
import weatherMaker from '../utilities/movieMaker';

// Utilities

/** 
 * 
 * Open Weather API Info
 * 
 * URL: https://openweathermap.org/
 * 
 * API Key: dd25d2460a5c500a2ba6381b197c586a
 * 
 * Base URL: https://api.openweathermap.org/data/2.5/forecast?q= 
 * 
 * For Vancouver: https://api.openweathermap.org/data/2.5/forecast?q=vancouver,ca&units=metric&appid=dd25d2460a5c500a2ba6381b197c586a
 * 
*/

const Home = (props) => { 

    // set the state variables of state properties 
    // that we want react to keep track of 
    const [weatherData, setWeatherData] = useState(null);
    //const [weatherData2, setWeatherData2] = useState(null);
    //City city is the  var and setCity is the function
    //to update that var
    //const [city, setCity] = useState(props.city);
    const d = new Date();
    const y = d.getFullYear()
    const [city, setCity] = useState(y);
    //country
    const [country, setCountry] = useState('popular');

    //[call back, when do we want the call back?]
    useEffect(() =>{
        // fetch our weather data using fetch API (native JS)
        // - setup an "async / await" to wait for the returned data
        //from the openWeatherAPI
        const fetchWeather = async () => {
            //const res2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=dd25d2460a5c500a2ba6381b197c586a`);
            const res = await fetch(`https://api.themoviedb.org/3/movie/${country}?api_key=6bc37b6dd53eb4c2d3a0e11217b72415&language=en-US&page=1&primary_release_year=${city}`);
            console.log(`https://api.themoviedb.org/3/movie/${country}?api_key=6bc37b6dd53eb4c2d3a0e11217b72415&language=en-US&page=1&primary_release_year=${city}`);
            let data = await res .json();
            //let data2 = await res2 .json();
            console.log(data);
            console.log(city);
            console.log(country);
            
            //const formattedWeatherData = weatherMaker(data.list);
            const formattedWeatherData = weatherMaker(data.results);
            //setWeatherData(formattedWeatherData);
            setWeatherData(formattedWeatherData);
            //console.log(formattedWeatherData);
            console.log(formattedWeatherData);
        }

        fetchWeather();
    }, [city, country]);
    //}, [city]);

    // State Change Method
    const handleChangeCity = (city) => {
        setCity(city);
       // setCountry(country);
    }
    const handleChangeCountry = (country) => {
        //setCity(city);
        setCountry(country);
    }

    return (
        <main>
            <section>
                <div className="page-info">
                <h2>Movies</h2>
                    <Location 
                    city={city} 
                    //country={country} 
                    handleChangeCity={handleChangeCity}/>
                    <Filter 
                    country={country} 
                    handleChangeCountry={handleChangeCountry}/>
                </div>       
            </section>
            <div className="five-day-forcast">
                {weatherData && <WeatherGrid weatherData={weatherData}/>}
            </div> 
        </main>
    );
}

export default Home;

