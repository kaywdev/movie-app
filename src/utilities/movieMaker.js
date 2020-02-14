// Date Maker

// Convert the API data into a format usable by our application

// Days and Months
//const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


function filterMD(arr){
    return (
        arr.reduce((result, item, i) => {
            //if(i <21){
                result.push({ date: item.release_date, poster: item.poster_path, title: item.title, overview: item.overview , id: item.id});
                //result.push({ date: item.release_date, poster: item.poster_path, title: item.title, background: item.backdrop_path, rating: item.popularity });
            //} 
            return result;
        }, [])
      )
}

function setDate(obj){
    // let strDate = obj.date //.split(' ')[0] + 'Z';
    // let date = new Date(strDate);
    // let dayName = days[date.getDay()];
    // let monthName = months[date.getMonth()];
    // let dayNumber = date.getDate();
    // obj.date = `${dayName} ${monthName} ${dayNumber}`;
    obj.date = obj.date;
}


function setPosterImage(obj){
    obj.icon = obj.poster;
}


function setTitle(obj){
    obj.title = obj.title;
}

function setId(obj){
    obj.id = obj.id;
}


function movieMaker(mdAPI){

    mdAPI = filterMD(mdAPI);

    mdAPI.forEach((item, index) => {
        setDate(item);
        setPosterImage(item);
        setTitle(item);
        setId(item);
        return mdAPI[index];        
    });

    return mdAPI;

}

export default movieMaker;
