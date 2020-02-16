import React from 'react';
//import FavouritesGrid from './FavouritesGrid';
import { getStorage } from '../utilities/storageMaker';
import SearchBar from './SearchBar';
import MovieGrid from './MovieGrid';

const WatchLater = () => {
    let movieData = getStorage('watchlater');
    //watchlater
    console.log(movieData);


    return(
        <main>
            <SearchBar />
            <section className="movie-lists">
                {movieData && <MovieGrid movieData={movieData}/>}
            </section>
        </main>
    )
}

export default WatchLater;