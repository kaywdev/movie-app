import React from 'react';

//const iconPath = process.env.PUBLIC_URL + '/assets/images/';
const iconPath = 'https://image.tmdb.org/t/p/w1280';

const days = (wd) => {
    return wd.map((day, i) => {
        return (
            <div key={i} className={`day day-0${i+1}`}>
                <figure>
                    <img src={iconPath + day.icon} alt={day.weather}/>
                </figure>
                <div className="date">
                    <span className="release-date">Release Date: {day.date}</span>
                </div>
                <div className="temps">
                    <span className="temp">Title: {day.high}</span>
                </div>
            </div>
        );
    })
}

const WeatherGrid = (props) => (
    <div className="five-day-weather-grid">
        {days(props.weatherData)}
    </div>
);

export default WeatherGrid;
              