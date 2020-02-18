import React, { useState, useEffect } from 'react';

//import FavouritesGrid from './FavouritesGrid';
import { getStorage } from '../utilities/storageMaker';
import SearchBar from './SearchBar';
import MovieGrid from './MovieGrid';

const WatchLater = () => {
    let movieData = getStorage('watchlater');
    //watchlater
    console.log(movieData);
    console.log(movieData.length);


    return(
        <main>
            <SearchBar />
            <div className={movieData.length > 0 ? 'watchExist' : 'watchNotExist'}>
                <p>No movies yet in the Watch Later Movie List!</p>
                <p>Create your Watch Later list by clicking the <span className="green">+</span> button on each movie.</p>
            </div>
            <div className="wrapper">
                <section className="movie-lists">
                    {movieData && <MovieGrid movieData={movieData} />}
                </section>
            </div>
        </main>
    )
}

export default WatchLater;