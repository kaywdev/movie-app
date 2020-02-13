import React from 'react';

const resultImgPath = 'https://image.tmdb.org/t/p/w1280';

const Result = ({ result }) => {

    return (

        <div className="result">
            <img scr={resultImgPath + result.poster} />
            <h3>{result.title}</h3>
        </div>

    );
}

export default Result;
