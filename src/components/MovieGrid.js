import React from 'react';

const iconPath = 'https://image.tmdb.org/t/p/w1280';

const movies = (md) => {
    return md.map((movie, i) => {
        return (
            <div key={i} className={`movie-info movie-0${i+1}`}>
                <figure>
                    <img src={iconPath + movie.poster} alt={movie.poster}/>
                </figure>
                <div className="movie-text">
                    <h3>{movie.title}</h3>
                        <div className="rating">
                            <div className="star-img">
                                <img src="../../images/star.png" alt="star"/>
                            </div>{/* end of rstar-img */}
                            <div className="star-img">
                                <img src="../../images/star.png" alt="star"/>
                            </div>{/* end of rstar-img */}
                            <div className="star-img">
                                <img src="../../images/star.png" alt="star"/>
                            </div>{/* end of rstar-img */}
                            <div className="star-img">
                                <img src="../../images/star.png" alt="star"/>
                            </div>{/* end of rstar-img */}
                            <div className="star-img">
                                <img src="../../images/star.png" alt="star"/>
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
                    <button>more info</button>
                </div>{/** end of movie-text */} 
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
              