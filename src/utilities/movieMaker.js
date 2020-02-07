// Date Maker

// Convert the API data into a format
// usable by our application
// - Input: [{ date: "2019-12-06 18:00:00" weather: id-code, high: high temp }] 
// - Output: [{ date: "Thu Dec 5", icon: image-file-name, high: Int, low: Int }]

// Days and Months
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Weather images
// const wi = {
//     cloudy: 'wi-cloudy.jpg',
//     fog: 'wi-fog.jpg',
//     thunderstorms: 'wi-thunderstorms.jpg',
//     partlySunny: 'wi-partly-sunny.jpg',
//     rain: 'wi-rain.jpg',
//     snow: 'wi-snow.jpg',
//     sunny: 'wi-sunny.jpg',
//     noIcon: 'wi-no-icon.jpg'
// }

// function filterWD(arr){
//     return (
//         arr.reduce((result, item, i) => {
//             if(i === 5 || i === 13 || i === 21 || i === 29 || i === 37){
//                 result.push({ date: item.dt_txt, weather: item.weather[0].id, high: item.main.temp_max });
//             } 
//             return result;
//         }, [])
//       )
// }

function filterWD(arr){
    return (
        arr.reduce((result, item, i) => {
            //if(i <21){
                result.push({ date: item.release_date, weather: item.poster_path, high: item.title });
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

// function setImageAndWeather(obj){
//     const id = obj.weather
//     if(id >= 200 && id <= 232){
//         obj.weather = 'thunderstorms';
//         obj.icon = wi.thunderstorms
//     }else if((id >= 300 && id <= 321) || (id >=500 && id <= 531)){
//         obj.weather = 'rain';
//         obj.icon = wi.rain;
//     }else if(id >= 600 && id <= 622){
//         obj.weather = 'snow';
//         obj.icon = wi.snow;
//     }else if(id === 800){
//         obj.weather = 'sunny';
//         obj.icon = wi.sunny; 
//     }else if(id === 801 || id === 802){
//         obj.weather = 'partly sunny';
//         obj.icon = wi.partlySunny; 
//     }else if(id === 803 || id === 804){
//         obj.weather = 'cloudy';
//         obj.icon = wi.cloudy;
//     }else if(id === 701){
//         obj.weather = 'mist';
//         obj.icon = wi.fog;
//     }else if(id === 711){
//         obj.weather = 'smoke';
//         obj.icon = wi.fog;
//     }else if(id === 721){
//         obj.weather = 'haze';
//         obj.icon = wi.fog
//     }else if(id === 731 || id === 761){
//         obj.weather = 'dust';
//         obj.icon = wi.fog;
//     }else if(id === 741){
//         obj.weather = 'mist';
//         obj.icon = wi.fog;
//     }else if(id === 751){
//         obj.weather = 'sand';
//         obj.icon = wi.fog;
//     }else if(762){
//         obj.weather = 'volcanic ash';
//         obj.icon = wi.fog;
//     }else if(id === 771){
//         obj.weather = 'squalls';
//         obj.icon = wi.fog;
//     }else if(id === 771){
//         obj.weather = 'tornado';
//         obj.icon = wi.fog;
//     }else{
//         obj.weather = 'unknown';
//         obj.icon = wi.noIcon
//     }
// }

function setImageAndWeather(obj){
    obj.icon = obj.weather;
}

// function setTemp(obj){
//     obj.high = Math.round(obj.high);
// }
function setTemp(obj){
    obj.high = obj.high;
}

// function weatherMakerr(wdAPI){

//     wdAPI = filterWD(wdAPI);

//     wdAPI.forEach((item, index) => {
//         setDate(item);
//         setImageAndWeather(item);
//         setTemp(item);
//         return wdAPI[index];        
//     });

//     return wdAPI;

// }

function weatherMaker(wdAPI){

    wdAPI = filterWD(wdAPI);

    wdAPI.forEach((item, index) => {
        setDate(item);
        setImageAndWeather(item);
        setTemp(item);
        return wdAPI[index];        
    });

    return wdAPI;

}

export default weatherMaker;
