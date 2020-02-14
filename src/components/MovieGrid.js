import React from 'react';

const iconPath = 'https://image.tmdb.org/t/p/w1280';

const movies = (md) => {
    return md.map((movie, i) => {
        return (
            <div key={i} className={`movie movie-0${i+1}`}>
                <figure>
                    <img src={iconPath + movie.poster} alt={movie.poster}/>
                </figure>
                <div className="date">
                    <span className="release-date">Release Date: {movie.date}</span>
                </div>
                <div className="temps">
                    <span className="temp">Title: {movie.title}</span>
                </div>
            </div>
        );
    })
}

const MovieGrid = (props) => (
    <div className="five-movie-weather-grid">
        {movies(props.movieData)}
    </div>
);

export default MovieGrid;
              