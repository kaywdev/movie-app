// Date Maker

// Convert the API data into a format usable by our application

// Days and Months
//const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


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

function setDate(obj){
    let strDate = obj.date.split('-');
    let monthIndex = strDate[1].split('');
    let monthName = months[monthIndex[1]];
    obj.date = `${monthName} ${strDate[2]}, ${strDate[0]}`;
}

function movieMaker(mdAPI){

    mdAPI = filterMD(mdAPI);

    mdAPI.forEach((item, index) => {
        setRateImage(item);
        setDate(item);
        return mdAPI[index];        
    });

    return mdAPI;
}

export default movieMaker;
