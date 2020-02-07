import React from 'react';

const countries = [ 'popular', 'top_rated', 'now_playing'];

const makeCityOptions = (countries, currentCity) => {
    console.log('hello'+currentCity);
    return countries.map((countryGroup, i) => {  return (<option value={countryGroup}>{countryGroup}</option> )});
}

// const makeCityOptGroups = (countries, currentCity) => {
//     return countries.map((countryGroup, i) => { 
//         return (
//             <optgroup key={i} label={countryGroup.country}>
//                 {makeCityOptions(countryGroup, currentCity)}
//             </optgroup>
//         )
//     });
// }


const Location = (props) => {
    // this handleChangeCountry is not the same as in Home.js
    // this is local
    // const handleChangeCountry = (e) => {
    //     e.preventDefault();
    //     const loc = e.target.elements.selectCity.value.split(',');
    //     props.handleChangeCountry(loc[0],loc[1]);
    // }

    const handleChangeCountry = (e) => {
        e.preventDefault();
        const loc = e.target.elements.selectCity.value.split(',');
        console.log('handle here '+loc);
        props.handleChangeCountry(loc[0]);
    }

    return (
        <div className="location">
            <h3>{props.city}
            , {props.country}
            </h3>
            <span className="divider">:</span>
            <form onSubmit={handleChangeCountry}>
                <label htmlFor="select-city">Filter: </label>
                <select name="selectCity" id="selectCity">
                    {makeCityOptions(countries, props.country)}  
                </select>
                <button type="submit">Filter</button>
            </form>
        </div>
    );

};

export default Location;