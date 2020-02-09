// Date Maker

// Convert the API data into a format usable by our application

// Days and Months
//const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


function filterWD(arr){
    return (
        arr.reduce((result, item, i) => {
            //if(i <21){
                result.push({ date: item.release_date, poster: item.poster_path, title: item.title });
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


function setImageAndWeather(obj){
    obj.icon = obj.poster;
}


function setTemp(obj){
    obj.title = obj.title;
}


function movieMaker(mdAPI){

    mdAPI = filterWD(mdAPI);

    mdAPI.forEach((item, index) => {
        setDate(item);
        setImageAndWeather(item);
        setTemp(item);
        return mdAPI[index];        
    });

    return mdAPI;

}

export default movieMaker;
