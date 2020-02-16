import React from 'react';
import {Link} from 'react-router-dom';

//const resultImgPath = 'https://image.tmdb.org/t/p/w1280';

const Result = ({ result }) => {

    //console.log('See these result...from Result Component.. ' + result);

    return (
        
            <div className="movie-info">
                <figure>
                <Link to={`/movie/${result.id}`}>
                <img src={result.poster}  alt={result.title} />
                </Link>
                </figure>
                <div className="movie-text">
                <h3>
                <Link to={`/movie/${result.id}`}>
                    {result.title}
                </Link>
                </h3>
                <div className="rating">
                            <div className="star-img">
                                <img src={result.rateStars}  alt="star"/>
                            </div>{/* end of rstar-img */}
                        </div>{/* end of rating */}
                        <div className="release-date">
                            <p> {result.date}</p>
                        </div> {/* end of release-date */}
                        <div className="movie-summary">
                            <p>
                                {result.overview}
                            </p>
                        </div>{/** end of movie-summary */}
                        <Link to={`/movie/${result.id}`}>  
                        <button>more info</button>
                    </Link>
                </div>
            </div>
           
    );
}

export default Result;
