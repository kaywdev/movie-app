import React, {useState, useEffect} from 'react';
import { isItemInStorage, removeItemFromStorage, addToStorage, getStorageIndexNumber} from '../utilities/storageMaker';

const AddWatchLater = ({movie}) => {

    useEffect(()=> {
        setWatchIndex( isItemInStorage(movie, 'watchlater'));
    },[movie]);

    const [watchIndex, setWatchIndex] = useState(-1);

    const handleAddWatchLater = (movie) => {
        setWatchIndex(addToStorage(movie, 'watchlater'));
    }

    const handleRemoveFromWatchLater = (movie) => {
        removeItemFromStorage( getStorageIndexNumber(movie, 'watchlater'),'watchlater');
        setWatchIndex(-1);
    }

    return (
        <div>
            { watchIndex >= 0 ? 
            <button 
                className="watchMovie" 
                onClick={() => {handleRemoveFromWatchLater(movie) }}>
                Delete from Watch Later
            </button> : 
            <button 
                className="unwatchMovie"
                onClick={() => {handleAddWatchLater(movie)}}>
                Add to Watch later</button> }
        </div>
    );
}

export default AddWatchLater;