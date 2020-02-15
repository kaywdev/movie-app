import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import movieMaker from '../utilities/movieMaker';
import AddFavourite from './AddFavourite';
import AddWatchLater from './AddWatchLater';
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

  const [singleMovie, setSingleMovie] = useState({});

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
    <div className="single-movie-wrap">
     <div>{singleMovie.title}</div>
     <div>{singleMovie.poster}</div>
     <AddFavourite movie={singleMovie} />
     <AddWatchLater movie={singleMovie} />
    </div>
    );
};

export default SingleMovie;