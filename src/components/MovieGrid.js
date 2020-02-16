import React from 'react';
import {Link} from 'react-router-dom';
import AddFavourite from './AddFavourite';
import AddWatchLater from './AddWatchLater';

//const iconPath = 'https://image.tmdb.org/t/p/w500';
//const rateIconPath = process.env.PUBLIC_URL + '/assets/images/';

const movies = (md) => {
    return md.map((movie, i) => {
        //console.log('in MovieGrid: '+ movie.id + ' and ' + movie.rate);
        //console.log('in MovieGrid star path: '+ `src/images/${movie.rateStars}`);

        return (
            
            <div key={i} className={`movie-info movie-0${i+1}`}>
                <figure>
                <Link to={`/movie/${movie.id}`}> <img src={movie.poster} alt={movie.poster}/></Link>
                </figure>
                <div className="toggleicon">
                    <AddFavourite movie={movie} />
                </div>
                <div className="toggleicon">
                    <AddWatchLater movie={movie} />
                </div>
                <div className="movie-text">
                <h3><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h3>
                    <div className="rating">
                        <div className="star-img">
                            <img src={movie.rateStars}  alt="star"/>
                        </div>{/* end of rstar-img */}
                    </div>{/* end of rating */}
                    <div className="release-date">
                        <p> {movie.date}</p>
                    </div> {/* end of release-date */}
                    <div className="movie-summary">
                        <p>
                            {movie.genres}
                        </p>
                        <p>
                            {movie.excerpt}
                        </p>
                    </div>{/** end of movie-summary */}
                    <Link to={`/movie/${movie.id}`}> 
                    <button classname="">more info</button>
                    </Link>
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
              