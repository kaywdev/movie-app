import React from 'react';

const charts = [ 'popular', 'top_rated', 'now_playing', 'upcoming'];

const makeChartOptions = (charts) => {
    return charts.map((chartGroup, i) => {  
        return (
            <option key={i} value={chartGroup}>{chartGroup}</option>
            )});
}


const Chart = (props) => {
    // this handleChangeChart is not the same as in Home.js
    // this is local

    const handleChangeChart = (e) => {
        e.preventDefault();
        const loc = e.target.elements.selectchart.value;
        props.handleChangeChart(loc);
    }

    return (
        <div className="custom-select-wrapper">
             <div className="sort-by">
                <span className="sort-by-text">Show me</span>
                <div class="custom-select">
                    <div className="custom-select__trigger">
                        <span>{props.chart}</span>
                        <div className="arrow" onSubmit={handleChangeChart}></div>
                    </div>{/** end of custom-select__trigger */}
                    <div className="custom-options">
                        <span className="custom-option" data-value="popular">{makeChartOptions(charts, props.chart)}</span>
                    </div>{/** end of custom-options */}
                </div>{/** end of custom-select */}
            </div> {/** end of sort-by */}
        </div>//end of custom-select-wrapper
    );

};

export default Chart;