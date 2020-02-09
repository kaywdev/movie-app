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



const Location = (props) => {

    const handleChangeCity = (e) => {
        e.preventDefault();
        const loc = e.target.elements.selectCity.value.split(',');
        console.log('handle here '+loc);
        props.handleChangeCity(loc[0]);
    }

    return (
       
        <div className="custom-select-wrapper">
        <div className="sort-by choose-year">
            <span className="choose-year-text">movie released in</span>
             <div className="custom-select">
                 <div className="custom-select__trigger"><span>{props.city}</span>
                     <div className="arrow" onSubmit={handleChangeCity}></div>
                 </div>
                 <div className="custom-options">
                     <span className="custom-option" data-value="popular">{makeCityOptions(cities, props.city)}  </span>
                 </div>
             </div>
         </div>
        </div>
       
    );

};

export default Location;