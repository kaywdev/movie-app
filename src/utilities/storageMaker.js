export const setStorage = (newItem, storageItem = 'favourites') => {
    if(Array.isArray(newItem)){
        newItem = JSON.stringify(newItem);
    }
    localStorage.setItem(storageItem, newItem);
}

// setStorage(item)

export const getStorage = (storageItem = 'favourites') => {
    let items = localStorage.getItem(storageItem);
    if(items){
        items = JSON.parse(items);
        return items;
    }else {
        items = JSON.stringify([]);
        localStorage.setItem(storageItem, items);
        return [];
    }
}

export const removeItemFromStorage = (index, storageItem = 'favourites') => {
    let itemsFromStorage = getStorage(storageItem);
    itemsFromStorage.splice(index, 1);
    itemsFromStorage = JSON.stringify(itemsFromStorage);
    setStorage(itemsFromStorage, storageItem);
    return -1;
}

export const isItemInStorage = (itemToTest, storageItem = 'favourites') => {
        
    const itemsFromStorage = getStorage(storageItem);
    // Test if item is in existing items array
    // Match test
    const itemMatch = (currentItem) => currentItem.title === itemToTest.title;
    // Use findIndex to get the index number of the item 
    // (if it is in the items array)
    const itemIndex = itemsFromStorage.findIndex(itemMatch);

    // If itemIndex is -1 then this item is not in storage
    if(itemIndex === -1){
        return -1;
    }else {
        return itemIndex;
    }

}

export const addToStorage = (newItem, storageItem = 'favourites') => {

    let itemsFromStorage = getStorage();

    itemsFromStorage.push(newItem);

    console.log(newItem);

    const index = itemsFromStorage.length - 1;

    itemsFromStorage = JSON.stringify(itemsFromStorage);

    setStorage(itemsFromStorage, storageItem);

    return index;

}

export const getStorageIndexNumber = (item, storageItem = 'favourites') => {
    const itemsFromStorage = getStorage(storageItem);
    const itemMatch = (currentItem) => currentItem.title === item.title;
    const itemIndex = itemsFromStorage.findIndex(itemMatch);
    return itemIndex;
}