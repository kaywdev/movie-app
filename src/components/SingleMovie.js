import React, {useState, useEffect} from 'react';
import {useParams, Redirect} from 'react-router-dom';
import movieMaker from '../utilities/movieMaker';
import AddFavourite from './AddFavourite';
import AddWatchLater from './AddWatchLater';
import SearchBar from './SearchBar';


const SingleMovie =({movie})=>{
    let { movieId } = useParams();
    const key = "65a9ed7abe7e75b3c0bf9250934f2b49";
    const [ singleMovie, setSingleMovie ] = useState({});
    const [isDataGood, setisDataGood] = useState(true);
    useEffect(() =>{

    const fetchMovies = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`);
        let data = await res.json();
        console.log(data.status_code);
         if(data.status_code === 34){
           setisDataGood(false);
         }
        setSingleMovie(movieMaker([data])[0]);

    }

    fetchMovies();

    }, [movieId]);


useEffect(() => {

  window.scrollTo(0, 0)

}, [])

return (
  
  <main>
    <SearchBar />
    {!isDataGood ? <Redirect to="/404" /> : 
    <div className={`smovie-wrap ${singleMovie.rate===0 ? 'text-grey':singleMovie.rate>0&& singleMovie.rate<4 ? 'text-red'
        :singleMovie.rate>=4&& singleMovie.rate<7 ? 'text-purple':'text-blue'}`}>
      <div className="smovie-img-wrap bgposter" style={{ backgroundImage: `url("${singleMovie.bgimg}")` }} >
        <div className="smovie-poster poster">
          <img src={singleMovie.poster} alt={singleMovie.title} />
        </div>
      </div>{/* .smovie-img-wrap */}
      <div className="smovie-content">
        <div className="smovie-header">
          <h1 className="smovie-title">{singleMovie.title}</h1>
          <div className="smovie-btn-wrapper">
            <div className="favbtn"><AddFavourite movie={singleMovie} /></div>
            <div className="watchbtn"><AddWatchLater movie={singleMovie} /></div>
          </div>{/* .smovie-btn-wrapper */}
        </div>{/* .smovie-header */}
        <div className="smovie-text">
          <div className="overview">
            <h3>Overview</h3><p>{singleMovie.overview}</p>
          </div>
          <div className="released">
            <h3>Released</h3><p>{singleMovie.date}</p>
          </div>
          <div className="rate">
            <h3>Rate</h3><p>{singleMovie.rate * 10}%</p>
          </div>
          <div className="genre">
            <h3>Genre</h3><p>{singleMovie.singleMovieGenres}</p>
          </div>
        </div>{/* .smovie-text */}
      </div>{/* .smovie-content */}
    </div> }
  </main>
  );
};

export default SingleMovie;