import React from 'react';
import Result from './Result';


const Results = ({ results }) => {
    // let { results } = useParams();
    // console.log(results);

    return (
        <section className="results movie-lists">
            <div className="movie-list">
            {(results !== undefined || results.length === 0) ? results.map(result => {
                return <Result result={result} />
            }) : <p>No search provided...Got back to search page...</p>}
            </div>
        </section>     
    );

}

export default Results;
