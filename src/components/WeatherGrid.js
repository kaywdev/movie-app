import React from 'react';

//const iconPath = process.env.PUBLIC_URL + '/assets/images/';
const iconPath = 'https://image.tmdb.org/t/p/w1280';

const days = (wd) => {
    return wd.map((day, i) => {
        return (
            
            <div key={i} className={`movie-info day-0${i+1}`}>
                <figure>
                    <img src={iconPath + day.icon} alt={day.weather}/>
                </figure>
                <div className="movie-text">
                    <h3>{day.high}</h3>
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
                        <p> {day.date}</p>
                    </div> {/* end of release-date */}
                    <div className="movie-summary">
                        <p>
                            The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.
                        </p>
                    </div>
                    <button>more info</button> 
                </div>  
            </div>
           
        );
    })
}

const WeatherGrid = (props) => (
    <div className ="movie-list">
        {days(props.weatherData)}
    </div>
);

export default WeatherGrid;
              