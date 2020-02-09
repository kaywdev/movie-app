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
        <div className="custom-select-wrapper">
            <div className="sort-by">
                <span className="sort-by-text">Show me</span>
                <div class="custom-select">
                    <div className="custom-select__trigger">
                        <span>{props.country}</span>
                        <div className="arrow" onSubmit={handleChangeCountry}></div>
                    </div>
                    <div className="custom-options">
                        <span className="custom-option" data-value="popular">{makeCityOptions(countries, props.country)}  </span>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Location;