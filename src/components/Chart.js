import React from 'react';

const charts = [ 'popular', 'top_rated', 'now_playing', 'upcoming'];
const chartNames = ['Popular', 'Top Rated', 'Now Playing', 'Upcoming'];

const makeChartOptions = (charts) => {
    return charts.map((chartGroup, i) => {  
        return (
            <option key={i} value={chartGroup} >{chartNames[i]}</option>
            )});
}

const Chart = (props) => {
    const handleChangeChart = (e) => {
        e.preventDefault();
        const loc = e.target.value;
        props.handleChangeChart(loc);
    }

    return (
        <div className="charts">
            <form>
                <label htmlFor="selectchart">Show me</label>
                <select name="selectchart" 
                        id="selectchart" 
                        className="selection"
                        onChange={handleChangeChart}>
                    {makeChartOptions(charts, props.chart)}  
                </select>
            </form>
        </div>
    );

};

export default Chart;