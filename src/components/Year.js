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
        <div className="custom-select-wrapper">
            <div className="sort-by choose-year">
                <span className="choose-year-text">movie released in</span>
                <div className="custom-select">
                    <div className="custom-select__trigger">
                        <span>{props.year}</span>
                        <div className="arrow" onSubmit={handleChangeYear}></div>
                    </div>{/* end of custom-select__trigger */}
                    <div className="custom-options">
                     <span className="custom-option" data-value="popular">{makeYearOptions(years, props.year)}  </span>
                    </div>{/* end of ccustom-options */}
                </div>{/* end of custom-select */}
            </div> {/* end of sort-by choose-year */}
        </div> // end of custom-select-wrapper
    );

};

export default Year;