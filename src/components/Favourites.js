import React from 'react';
import FavouritesGrid from './FavouritesGrid';
import { getStorage } from '../utilities/storageMaker';
import SearchBar from './SearchBar';

const Favourites = () => {
    let favFormattedData = getStorage('favourites');
    //watchlater
    console.log(favFormattedData);


    return(
        <main>
            <SearchBar />
            <section className="movie-lists">
                {favFormattedData && <FavouritesGrid favFormattedData={favFormattedData}/>}
            </section>
        </main>
    )
}

export default Favourites;