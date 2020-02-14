import React from 'react';

const resultImgPath = 'https://image.tmdb.org/t/p/w1280';

const Result = ({ result }) => {

    //console.log('See these result...from Result Component.. ' + result);

    return (

        <div className="result">
            <img src={resultImgPath + result.poster_path}  alt={result.title} />
            <h3>{result.title}</h3>
        </div>

    );
}

export default Result;
