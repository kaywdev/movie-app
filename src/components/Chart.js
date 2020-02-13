import React, { useState }  from 'react';






const Chart = (props) => {
    // this handleChangeChart is not the same as in Home.js
    // this is local

    const [ selectActive, setSelectState ] = useState(false);
    const [rankSelection, setRankSelection] = useState(props.chart);

    const charts = [ 'popular', 'top_rated', 'now_playing', 'upcoming'];

    

    const makeChartOptions = (charts) => {
        
        return charts.map((chartGroup, i) => {
            
            return (
                
                <span key={i} 
                    value={chartGroup} 
                    
                    className={`custom-option ${chartGroup === rankSelection ? 'selected' : ''} `}
                    onClick={() => { setRankSelection(chartGroup)}}
                    >
                        {chartGroup}
                </span>
            
            )
        
        }
        );
    }
   
 
    
    return (
        <div className="custom-select-wrapper">
             <div className="sort-by">
                <span className="sort-by-text">Show me</span>
                <div className={`custom-select ${selectActive ? "open" : ""}`}>
                    <div className="custom-select__trigger">
                        <span>{rankSelection}</span>
                        
                        <div className="arrow" onClick={()=>setSelectState((prevSelectActive)=> !prevSelectActive)}></div>
                    </div>{/** end of custom-select__trigger */}
                    <div className="custom-options">
                        {makeChartOptions(charts, rankSelection)}
    
                    </div>{/** end of custom-options */}
                </div>{/** end of custom-select */}
            </div> {/** end of sort-by */}
        </div>//end of custom-select-wrapper
    );

};

export default Chart;