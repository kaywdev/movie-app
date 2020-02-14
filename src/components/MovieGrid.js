import React from 'react';
import {Link} from 'react-router-dom';

const iconPath = 'https://image.tmdb.org/t/p/w1280';
//const rateIconPath = process.env.PUBLIC_URL + '/assets/images/';
const rateIconPath = process.env.PUBLIC_URL + '/assets/images/';

const movies = (md) => {
    return md.map((movie, i) => {
        console.log('in MovieGrid: '+ movie.id + ' and ' + movie.rate);
        console.log('in MovieGrid star path: '+ `src/images/${movie.rateStars}`);

        return (
            <div key={i} className={`movie-info movie-0${i+1}`}>
                <figure>
                    <img src={iconPath + movie.poster} alt={movie.poster}/>
                </figure>
                <div className="movie-text">
                    <h3>{movie.title}</h3>
                    <div className="rating">
                        <div className="star-img">
                            <img src={`${rateIconPath}${movie.rateStars}`}  alt="star"/>
                        </div>{/* end of rstar-img */}
                    </div>{/* end of rating */}
                    <div className="release-date">
                        <p> {movie.date}</p>
                    </div> {/* end of release-date */}
                    <div className="movie-summary">
                        <p>
                            {movie.overview}
                        </p>
                    </div>{/** end of movie-summary */}
                    <Link to='/movie'> 
                    <button>more info</button>
                    </Link>
                    <ul>
                        <li><a href="#0">Favourite</a></li>
                        <li><a href="#0">Watch Later</a></li>
                    </ul>
                </div>{/** end of movie-text */} 
            </div>
        );
    })
}

const MovieGrid = (props) => (
    <div className="movie-list">
        {movies(props.movieData)}
    </div>
);

export default MovieGrid;
              