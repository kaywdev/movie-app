import React, {useState, useEffect} from 'react';
import { isItemInStorage, removeItemFromStorage, addToStorage, getStorageIndexNumber} from '../utilities/storageMaker';

const AddFavourite = ({movie}) => {
    console.log('here in add fav : ' + movie.title);

    useEffect(()=> {
        setFavIndex( isItemInStorage(movie, 'favourites'));
    },[movie]);

    const [favIndex, setFavIndex] = useState(-1);

    const handleAddFavourite = (movie) => {
        setFavIndex(addToStorage(movie, 'favourites'));
    }

    const handleRemoveFromFavourites = (movie) => {
        removeItemFromStorage( getStorageIndexNumber(movie, 'favourites'), 'favourites' );
        setFavIndex(-1);
    }

    return (
        <div>
            { favIndex >= 0 ? 
            <button 
                className="favMovie" 
                onClick={() => {handleRemoveFromFavourites(movie) }}>
                    Unfavourite this movie
            </button> : 
            <button 
                className="unfavMovie" 
                onClick={() => {handleAddFavourite(movie)}}>
                    Favourite this movie
            </button> }
        </div>
    );

}

export default AddFavourite;