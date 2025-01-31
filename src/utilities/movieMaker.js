// Date Maker

// Convert the API data into a format usable by our application

const genresList = [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 10402,
        "name": "Music"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 10770,
        "name": "TV Movie"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "War"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const iconPath = 'https://image.tmdb.org/t/p/w500';
const iconPath1280 = 'https://image.tmdb.org/t/p/w1280';
const rateIconPath = process.env.PUBLIC_URL + '/assets/images/';

function filterMD(arr){
    return (
        arr.reduce((result, item) => {
            result.push({ date: item.release_date, poster: item.poster_path, title: item.title, 
                excerpt: item.overview, overview: item.overview , id: item.id, rate:item.vote_average, 
                bgimg: item.backdrop_path, genres: item.genre_ids, singleMovieGenres: item.genres });
            return result;
        }, [])
      )
}

function setExcerpt(obj){
    if(obj.excerpt){
        const fullOverview = obj.excerpt;
        let brokenOverview = fullOverview.split(' ');
        if(brokenOverview.length > 12){
            let brokenOverviewIndex = 0;
            let rebuildExcerpt = '';
            while(brokenOverviewIndex < 12){
                rebuildExcerpt = rebuildExcerpt + brokenOverview[brokenOverviewIndex] + ' ';
                brokenOverviewIndex +=1;
            }
            obj.excerpt = rebuildExcerpt + '...';
        }
    }
}

 function setGenres(obj){
     if(obj.genres){
        let genresNames = '';
        genresNames = ''+ obj.genres.map((genre)=> {
            let genreName = genresList.find(x => x.id === genre).name;
            return (genresNames + " " + genreName);
        });

        obj.genres = genresNames;

    }else if(obj.singleMovieGenres){
            let genresNames = '';
            genresNames = ''+ obj.singleMovieGenres.map((genre)=> {
            let genreName = genre.name;
            return (genresNames + " " + genreName);
        });

        obj.singleMovieGenres = genresNames;
    }
}

function setRateImage(obj){
    const rate = obj.rate;
    if(rate === 0 ){
        obj.rateStars = rateIconPath + 'zero-blue.png';
    }else if(rate >=0 && rate <1) {
        obj.rateStars = rateIconPath+'one-half.png';
    }else if(rate >= 1 && rate <2){
        obj.rateStars = rateIconPath+'one.png';
    }else if(rate >= 2 && rate <3){
        obj.rateStars = rateIconPath + 'one-and-half.png';
    }else if(rate >= 3 && rate <4){
        obj.rateStars = rateIconPath + 'two.png';
    }else if(rate >= 4 && rate <5){
        obj.rateStars = rateIconPath + 'two-and-half.png';
    }else if(rate >= 5 && rate <6){
        obj.rateStars = rateIconPath + 'three.png';
    }else if(rate >= 6 && rate <7){
        obj.rateStars = rateIconPath + 'three-and-half.png';
    }else if(rate >= 7 && rate <8){
        obj.rateStars = rateIconPath + 'four.png';
    }else if(rate >= 8 && rate <9){
        obj.rateStars = rateIconPath + 'four-and-half.png';
    }else{
        obj.rateStars = rateIconPath + 'five.png';
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

        let monthName = months[monthIndex];
        obj.date = `${monthName} ${strDate[2]}, ${strDate[0]}`;

    }else{
        obj.date = ''
    }
}

function setImage(obj) {
    if(obj.bgimg === null && obj.poster != null){
        obj.poster = iconPath + obj.poster;
        obj.bgimg = rateIconPath + 'default-bgposter.png';
    }else if(obj.bgimg != null && obj.poster === null){
        obj.bgimg = iconPath1280 + obj.bgimg;
        obj.poster = rateIconPath + 'default-poster.png';
    }else if(obj.bgimg === null && obj.poster === null){
        obj.poster = rateIconPath + 'default-poster.png';
        obj.bgimg = rateIconPath + 'default-bgposter.png';
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
        setGenres(item);
        setExcerpt(item);
        return mdAPI[index];        
    });

    return mdAPI;
}

export default movieMaker;