import React from 'react';

const years = [ 2022,  2021,  2020, 2019, 2018, 2017, 2016,2015];
 

const makeYearOptions = (years) => {
    return years.map((yearGroup, i) => {  
        return (
            <option key={i} value={yearGroup}>{yearGroup}</option> 
            )});
}



const Year = (props) => {
    // this handleChangeYear is not the same as in Home.js
    // this is local

    const handleChangeYear = (e) => {
        e.preventDefault();
        const loc = e.target.elements.selectyear.value;
        props.handleChangeYear(loc);
    }

    return (
        <div className="year">
            <h3>{props.year}</h3>
            <form onSubmit={handleChangeYear}>
                <label htmlFor="selectyear">year: </label>
                <select name="selectyear" id="selectyear">
                    {makeYearOptions(years, props.year)}  
                </select>
                <button type="submit">Change Year</button>
            </form>
        </div>
    );

};

export default Year;