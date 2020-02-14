import React, {useState, useEffect} from 'react';
import { isItemInStorage, removeItemFromStorage, addToStorage, getStorageIndexNumber} from '../utilities/storageMaker';

// const favToggle = ['Favourite', 'Unfavourite'];


const AddFavourite = ({movie}) => {

    

    useEffect(()=> {
        setFavIndex( isItemInStorage(movie) );
    },[]);

    const [favIndex, setFavIndex] = useState(-1);

    const handleAddFavourite = (movie) => {
        setFavIndex(addToStorage(movie));
        console.log('Index from Add Fav Event: ', favIndex);
    }

    const handleRemoveFromFavourites = (movie) => {
        removeItemFromStorage( getStorageIndexNumber(movie) );
        setFavIndex(-1);
    }

    return (
        <div>
            { favIndex >= 0 ? <button onClick={() => {handleRemoveFromFavourites(movie) }}>Remove Favourite</button> : <button className="favMovie" onClick={() => {handleAddFavourite(movie)}}>favourite</button> }
        </div>
    );

}

export default AddFavourite;