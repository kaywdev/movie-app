import React from 'react';
import {Link} from 'react-router-dom';
import AddFavourite from './AddFavourite';
import AddWatchLater from './AddWatchLater';


const movies = (md) => {
   
    return md.map((movie, i) => {

        return (
         <div key={i}
              className={`movie-info movie-0${i+1} 
              ${movie.rate === 0 ? 'background-grey' 
              : movie.rate > 0 && movie.rate < 4 ? 'background-red'
              : movie.rate>=4&& movie.rate<7 ? 'background-purple'
              :'background-blue'}`}>
            <div className="movie-poster-wrap">
                <figure>
                    <Link to={`/movie/${movie.id}`}><img src={movie.poster} alt={movie.poster}/></Link>
                </figure>
                <div className="toggleFav">
                    <AddFavourite movie={movie} />
                </div>
                <div className="toggleWatch">
                    <AddWatchLater movie={movie} />
                </div>
            </div>{/* .movie-poster-wrap */}
            <div className="movie-text">
                <h3><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h3>
                <div className="rating">
                    <div className="star-img">
                        <img src={movie.rateStars}
                            alt="star"
                            className ={`${movie.rate>=0&& movie.rate<4 ? 'star-red'
                            : movie.rate >= 4 && movie.rate < 7 ? 'star-purple'
                            : 'star-blue'}`}/>
                    </div>{/* .star-img */}
                    <div className="rating-number">
                        <p className ={`${movie.rate === 0 ? 'text-grey'
                        : movie.rate > 0 && movie.rate < 4 ? 'text-red'
                        : movie.rate >= 4 && movie.rate < 7 ? 'text-purple'
                        : 'text-blue'}`}>
                        {movie.rate * 10}%</p>
                    </div>{/* .rating-number */}
                </div>{/* .rating */}
                <div className="release-date">
                    <p> {movie.date}</p>
                </div> {/* .release-date */}
                <div className="movie-summary">
                    <p>{movie.genres}</p>
                    <p>{movie.excerpt}</p>
                </div>{/* .movie-summary */}
                    <Link to={`/movie/${movie.id}`}> 
                        <button className="moreinfo-btn">More info</button>
                    </Link>
            </div>{/* .movie-text */} 
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
              