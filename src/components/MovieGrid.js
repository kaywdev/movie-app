import React from 'react';
import {Link} from 'react-router-dom';
import AddFavourite from './AddFavourite';
import SingleMovie from './SingleMovie';

const iconPath = 'https://image.tmdb.org/t/p/w1280';
const rateIconPath = process.env.PUBLIC_URL + '/assets/images/';

const movies = (md) => {
    return md.map((movie, i) => {
        //console.log('in MovieGrid: '+ movie.id + ' and ' + movie.rate);
        //console.log('in MovieGrid star path: '+ `src/images/${movie.rateStars}`);

        return (
            
            <div key={i} className={`movie-info movie-0${i+1}`}>
                <figure>
                <Link to='/movie'> <img src={iconPath + movie.poster} alt={movie.poster}/></Link>
                </figure>
                <div className="movie-text">
                <h3><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h3>
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
                </div>{/** end of movie-text */} 
                <AddFavourite movie={movie} />
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
              