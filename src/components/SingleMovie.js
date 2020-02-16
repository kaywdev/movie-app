import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import movieMaker from '../utilities/movieMaker';
import AddFavourite from './AddFavourite';
import AddWatchLater from './AddWatchLater';
import Search from './Search';
import Results from './Results';
import SearchBar from './SearchBar';
// Individual Movie Page
// The movie poster
// Movie title
// Release date
// Rating
// Short summary of the movie
// Fav/Unfav button

const SingleMovie =({movie})=>{
  let { movieId } = useParams();
  console.log(movieId);

  const key = "65a9ed7abe7e75b3c0bf9250934f2b49";
  // const iconPath = 'https://image.tmdb.org/t/p/w500';
  // const iconPath1280 = 'https://image.tmdb.org/t/p/w1280';
  const [ singleMovie, setSingleMovie ] = useState({});

  useEffect(() =>{
        
    const fetchMovies = async () => {

      const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`);
      let data = await res.json();

      setSingleMovie(movieMaker([data])[0]);
      console.log(data);

    }

    fetchMovies();
}, []);

  return (
    <main>
      <SearchBar />
      {/* <Search handleSearch={handleSearch} search={null} />
      <Results results={result} /> */}

      <div className="smovie-wrap">

        <div className="smovie-img-wrap bgposter" style={{ backgroundImage: `url("${singleMovie.bgimg}")` }} >
          <div className="smovie-poster poster">
            <img src={singleMovie.poster} alt={singleMovie.title} />
          </div>
        </div>{/* .smovie-img-wrap */}


        <div className="smovie-content">
          <h1 className="smovie-title">{singleMovie.title}</h1>
          <div className="favbtn">
            <AddFavourite movie={singleMovie} />
          </div>
          <div className="watchbtn">
            <AddWatchLater movie={singleMovie} />
          </div>
          <div className="smovie-text">
            <div className="overview">
              <h3>Overview</h3>
              <p>{singleMovie.overview}</p>
            </div>
            <div className="released">
              <h3>Released</h3>
              <p>{singleMovie.date}</p>
            </div>
            <div className="rate">
              <h3>Rate</h3>
              <p>{singleMovie.rate * 10}%</p>
            </div>
            <div className="genre">
              <h3>Genre</h3>
              <p>{singleMovie.singleMovieGenres}</p>
            </div>
          </div>
        </div>
      </div>{/* .smovie-wrap */}
    </main>
    );
};

export default SingleMovie;