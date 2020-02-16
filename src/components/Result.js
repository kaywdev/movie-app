import React from 'react';

const resultImgPath = 'https://image.tmdb.org/t/p/w1280';

const Result = ({ result }) => {

    //console.log('See these result...from Result Component.. ' + result);

    return (
        
            <div className="movie-info">
                <figure>
                <img src={resultImgPath + result.poster}  alt={result.title} />
                </figure>
                <div className="movie-text">
                <h3>{result.title}</h3>
                <div className="rating">
                            <div className="star-img">
                                <img src={`${resultImgPath}${result.rateStars}`}  alt="star"/>
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
                        
                        <button>more info</button>
                    
                </div>
            </div>
           
    );
}

export default Result;
