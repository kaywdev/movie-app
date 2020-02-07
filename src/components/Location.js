import React from 'react';

 const cities = [ 2022,  2021,  2020, 2019, 2018, 2017, 2016,2015];
 
// const cities = [
//     {
//         country: 'Canada',
//         code: 'CA',
//         cities: ['Vancouver', 'Toronto', 'Montreal']
//     },
//     {
//         country: 'USA',
//         code: 'US',
//         cities: ['Los Angeles', 'New York', 'Miami']
//     },
//     {
//         country: 'Korea',
//         code: 'KR',
//         cities: ['Seoul', 'Busan', 'Daegu']
//     },
//     {
//         country: 'Japan',
//         code: 'JP',
//         cities: ['Tokyo', 'Osaka', 'Sapporo']
//     },
//     {
//         country: 'China',
//         code: 'CN',
//         cities: ['Beijing', 'Shanghai', 'Chengdu']
//     },
//     {
//         country: 'India',
//         code: 'IN',
//         cities: ['Mumbai', 'New Delhi', 'Kolkata']
//     },
//     {
//         country: 'Iran',
//         code: 'IR',
//         cities: ['Tehran', 'Mashhad', 'Isfahan']
//     },
//     {
//         country: 'United Kingdom',
//         code: 'UK',
//         cities: ['London', 'Manchester', 'Liverpool']
//     }
// ]

// const makeCityOptions = (cityGroup, currentCity) => {
//     return cityGroup.cities.map((city, i) => ( <option key={i} value={`${city},${cityGroup.code}`}>{city}</option> ));
// }

const makeCityOptions = (cities, currentCity) => {
    console.log('hello'+currentCity);
    return cities.map((cityGroup, i) => {  return (<option value={cityGroup}>{cityGroup}</option> )});
}

// const makeCityOptGroups = (cities, currentCity) => {
//     return cities.map((cityGroup, i) => { 
//         return (
//             <optgroup key={i} label={cityGroup.country}>
//                 {makeCityOptions(cityGroup, currentCity)}
//             </optgroup>
//         )
//     });
// }


const Location = (props) => {
    // this handleChangeCity is not the same as in Home.js
    // this is local
    // const handleChangeCity = (e) => {
    //     e.preventDefault();
    //     const loc = e.target.elements.selectCity.value.split(',');
    //     props.handleChangeCity(loc[0],loc[1]);
    // }

    const handleChangeCity = (e) => {
        e.preventDefault();
        const loc = e.target.elements.selectCity.value.split(',');
        console.log('handle here '+loc);
        props.handleChangeCity(loc[0]);
    }

    return (
        <div className="location">
            <h3>{props.city}
            {/* , {props.country} */}
            </h3>
            <span className="divider">:</span>
            <form onSubmit={handleChangeCity}>
                <label htmlFor="select-city">City: </label>
                <select name="selectCity" id="selectCity">
                    {makeCityOptions(cities, props.city)}  
                </select>
                <button type="submit">Change Year</button>
            </form>
        </div>
    );

};

export default Location;