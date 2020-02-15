import React, {useState, useEffect} from 'react';
import { isItemInStorage, removeItemFromStorage, addToStorage, getStorageIndexNumber} from '../utilities/storageMaker';

// const favToggle = ['Favourite', 'Unfavourite'];


const AddWatchLater = ({movie}) => {

    

    useEffect(()=> {
        setWatchIndex( isItemInStorage(movie) );
    },[]);

    const [watchIndex, setWatchIndex] = useState(-1);

    const handleAddWatchLater = (movie) => {
        setWatchIndex(addToStorage(movie, 'watchlater'));
        console.log('Index from Add Fav Event: ', watchIndex);
    }

    const handleRemoveFromWatchLater = (movie) => {
        removeItemFromStorage( getStorageIndexNumber(movie, 'watchlater'),'watchlater'  );
        setWatchIndex(-1);
    }

    return (
        <div>
            { watchIndex >= 0 ? <button onClick={() => {handleRemoveFromWatchLater(movie) }}>Remove from Watch Later</button> : <button className="watchLaterMovie" onClick={() => {handleAddWatchLater(movie)}}>watch later</button> }
        </div>
    );

}

export default AddWatchLater;