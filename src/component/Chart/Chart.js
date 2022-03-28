import React from "react";
import './Chart.css'
import ChartBar from "./ChartBar";

const Chart = ({dataPoints}) => {
    const totalMaximum = Math.max(...dataPoints.map(dataPoint => dataPoint.value))
    return (
        <div className='chart'>
            {dataPoints.map(dataPoint => <ChartBar key={dataPoint.id} data={dataPoint} maxValue={totalMaximum}/>)}
        </div>
    )
}

export default Chart