import React from 'react';
import FavouritesGrid from './FavouritesGrid';
import { getStorage } from '../utilities/storageMaker';

const Favourites = () => {
    let favFormattedData = getStorage('favourites');
    //watchlater
    console.log(favFormattedData);


    return(
        <section className="movie-lists">
            {favFormattedData && <FavouritesGrid favFormattedData={favFormattedData}/>}
        </section> 
    )
}

export default Favourites;