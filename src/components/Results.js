import React from 'react';
import Result from './Result';

const Results = ({ results }) => {

    console.log(results);

    return (
        <section className="results">
            {(results !== undefined || results.length === 0) ? results.map(result => {
                return <Result result={result} />
            }) : <p>No search provided...Got back to search page...</p>}
        </section>     
    );

}

export default Results;
