import React from 'react';
//import FavouritesGrid from './FavouritesGrid';
import { getStorage } from '../utilities/storageMaker';
import SearchBar from './SearchBar';
import MovieGrid from './MovieGrid';

const Favourites = () => {
    let movieData = getStorage('favourites');
    //watchlater
    //console.log(movieData);


    return(
        <main>
            <SearchBar />
            <div className={movieData.length > 0 ? 'favExist' : 'favNotExist'}>
                <p>No movies yet in the Favourite Movie List!</p>
                <p>Create your Favourite list by clicking the <span className="red">&#9829;</span> button on each movie.</p>
            </div>
            <div className="wrapper">
                <section className="movie-lists">
                    {movieData && <MovieGrid movieData={movieData} />}
                </section>
            </div>
        </main>
    )
}

export default Favourites;