import React from 'react';
import Result from './Result';


const Results = ({ results }) => {
    
    results.sort((a,b)=>{return b.rate-a.rate});
    results.sort((a,b)=>{return b.date.substring(8)-a.date.substring(8)});

    return (
        <section className="results movie-lists">
            <div className="movie-list-results">
            {(results !== undefined || results.length === 0) ? results.map((result, i) => {
                return <Result key={i} result={result} />
            }) : <p>No search provided...Got back to search page...</p>}
            </div>
        </section>     
    );
}

export default Results;