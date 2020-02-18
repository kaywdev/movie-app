import React from 'react';
import {Link} from 'react-router-dom';


const Result = ({ result }) => {

    return (
        <Link to={`/movie/${result.id}`}>
            <div className="movie-results">
                <figure>
                    <img src={result.poster} alt={result.title} />
                </figure>
                <div className="movie-text">
                    <h3>{result.title}</h3>
                </div>
                <div className='rate-starts'>
                    <div className="rating">
                        <div className="star-img">
                            <img src={result.rateStars} 
                                 alt="star" 
                                 className={`star-img ${result.rate === 0 ? 'star-grey'
                                 : result.rate > 0 && result.rate < 4 ? 'star-red'
                                 : result.rate >= 4&& result.rate < 7 ? 'star-purple'
                                 : 'star-blue'}`}/>
                        </div>{/* end of rstar-img */}
                    </div>{/* end of rating */}
                    <div className="release-date">
                        <p> {result.date}</p>
                    </div> {/* end of release-date */}
                </div>
            </div>
        </Link>     
    );
}

export default Result;