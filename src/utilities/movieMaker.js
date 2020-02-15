// Date Maker

// Convert the API data into a format usable by our application

// Days and Months
//const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const iconPath = 'https://image.tmdb.org/t/p/w500';
const iconPath1280 = 'https://image.tmdb.org/t/p/w1280';
const rateIconPath = process.env.PUBLIC_URL + '/assets/images/';

function filterMD(arr){
    return (
        arr.reduce((result, item, i) => {
            //if(i <21){
                result.push({ date: item.release_date, poster: item.poster_path, title: item.title, 
                    overview: item.overview , id: item.id, rate:item.vote_average, 
                    bgimg: item.backdrop_path, genres: item.genre_names });
            //} 
            return result;
        }, [])
      )
}


function setRateImage(obj){
    const rate = obj.rate;
    if(rate === 0 ){
        // obj.rate = 'zero';
        obj.rateStars = 'zero-blue.png';
    }else if(rate >=0 && rate <1) {
        // obj.rate = 'one-half';
        obj.rateStars = 'one-half.png';
    }else if(rate >= 1 && rate <2){
        // obj.rate = 'one';
        obj.rateStars = 'one.png';
    }else if(rate >= 2 && rate <3){
        // obj.rate = 'one and half';
        obj.rateStars = 'one-and-half.png';
    }else if(rate >= 3 && rate <4){
        // obj.rate = 'two';
        obj.rateStars = 'two.png';
    }else if(rate >= 4 && rate <5){
        // obj.rate = 'two and half';
        obj.rateStars = 'two-and-half.png';
    }else if(rate >= 5 && rate <6){
        // obj.rate = 'three';
        obj.rateStars = 'three.png';
    }else if(rate >= 6 && rate <7){
        // obj.rate = 'three and half';
        obj.rateStars = 'three-and-half.png';
    }else if(rate >= 7 && rate <8){
        // obj.rate = 'four';
        obj.rateStars = 'four.png';
    }else if(rate >= 8 && rate <9){
        // obj.rate = 'four and half';
        obj.rateStars = 'four-and-half.png';
    }else{
        // obj.rate = 'five';
        obj.rateStars = 'five.png';
    }
}

function setDate(obj) {
    if(obj.date != null){
        let strDate = obj.date.split('-');
        let monthIndex = strDate[1];
        if(monthIndex === '01'){
            monthIndex=0;
        }else if(monthIndex === '02'){
            monthIndex=1;
        }else if(monthIndex === '03'){
            monthIndex=2;
        }else if(monthIndex === '04'){
            monthIndex=3;
        }else if(monthIndex === '05'){
            monthIndex=4;
        }else if(monthIndex === '06'){
            monthIndex=5;
        }else if(monthIndex === '07'){
            monthIndex=6;
        }else if(monthIndex === '08'){
            monthIndex=7;
        }else if(monthIndex === '09'){
            monthIndex=8;
        }else if(monthIndex === '10'){
            monthIndex=9;
        }else if(monthIndex === '11'){
            monthIndex=10;
        }else if(monthIndex === '12'){
            monthIndex=11;
        }
        //console.log(monthIndex);
        let monthName = months[monthIndex];
        //console.log(monthName);
        obj.date = `${monthName} ${strDate[2]}, ${strDate[0]}`;
    }else{
        obj.date = ''
    }
}

function setImage(obj) {
    if(obj.bgimg === null && obj.poster != null){
        obj.poster = iconPath + obj.poster;
        obj.bgimg = obj.poster;
    }else if(obj.bgimg != null && obj.poster === null){
        obj.bgimg = iconPath1280 + obj.bgimg;
        obj.poster = obj.bgimg;
    }else if(obj.bgimg === null && obj.poster === null){
        obj.poster = rateIconPath + 'zero-grey.png';
        obj.bgimg = rateIconPath + 'zero-grey.png';
    }else{
        obj.poster = iconPath + obj.poster;
        obj.bgimg = iconPath1280 + obj.bgimg;
    }
}


function movieMaker(mdAPI){

    mdAPI = filterMD(mdAPI);

    mdAPI.forEach((item, index) => {
        setRateImage(item);
        setDate(item);
        setImage(item);
        return mdAPI[index];        
    });

    return mdAPI;
}

export default movieMaker;
