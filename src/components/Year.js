import React, { useState } from 'react';

const years = [ 2022,  2021,  2020, 2019, 2018, 2017, 2016,2015];
 


const Year = (props) => {
    // this handleChangeYear is not the same as in Home.js
    // this is local
    const [selectYearActive, setSelectYear ] = useState(false);
    const [yearSelection, setYearSelection] = useState(props.year);

    const YearBoxToggleClass = (e)=>{
        setSelectYear(!selectYearActive);
    }

   
    const YearSelectedToggleClass = (yearGroup)=>{
        setYearSelection(yearGroup);
    //setSelectYear(!selectYearActive);
        
    }

   
    
    const makeYearOptions = (years) => {
       
        return years.map((yearGroup, i) => {  
            return (
                <span key={i} 
                      value={yearGroup}
                      className={`custom-option ${yearGroup === yearSelection ?'selected' : ''}`}
                      //onClick ={()=>setYearSelection(yearGroup)}
                     onClick ={YearSelectedToggleClass}
                     //onChange = {handleChange}
                    >
                          
                     {yearGroup}    
                </span>

               
               
                );
            });
    }

  

    return (
        <div className="custom-select-wrapper">
            <div className="sort-by choose-year">
                <span className="choose-year-text">movie released in</span>
                <div className={`custom-select ${selectYearActive ? "open" : ""}`}>
                    <div className="custom-select__trigger">
                        <span>{yearSelection}</span>
                        <div className="arrow" 
                             onClick={YearBoxToggleClass}>
                                
                        </div>
                    </div>{/* end of custom-select__trigger */}
                    <div className="custom-options">
                    {makeYearOptions(years, yearSelection)} 
                    </div>{/* end of ccustom-options */}
                </div>{/* end of custom-select */}
            </div> {/* end of sort-by choose-year */}
        </div> // end of custom-select-wrapper
    );

};

export default Year;