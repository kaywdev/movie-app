import React from 'react';
//import FavouritesGrid from './FavouritesGrid';
import { getStorage } from '../utilities/storageMaker';
import SearchBar from './SearchBar';
import MovieGrid from './MovieGrid';

const Favourites = () => {
    let movieData = getStorage('favourites');
    //watchlater
    console.log(movieData);


    return(
        <main>
            <SearchBar />
            <div className="wrapper">
                <section className="movie-lists">
                    {movieData && <MovieGrid movieData={movieData} />}
                </section>
            </div>
        </main>
    )
}

export default Favourites;