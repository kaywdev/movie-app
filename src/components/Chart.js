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
        const loc = e.target.value;
        props.handleChangeChart(loc);
    }

    return (
     <div className="charts">
            {/* <h3>{props.chart}</h3> */}
            <form>
                <label htmlFor="selectchart">Show me</label>
                <select name="selectchart" id="selectchart" onChange={handleChangeChart}>
                    {makeChartOptions(charts, props.chart)}  
                </select>
            </form>
        </div>
    );

};

export default Chart;