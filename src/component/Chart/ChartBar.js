import React from "react";
import './ChartBar.css'

const ChartBar = ({data, maxValue}) => {
    let barFillHeight = '0%'
    if (maxValue > 0) barFillHeight = Math.round((data.value / maxValue) * 100) + '%'
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height: barFillHeight}}>&nbsp;</div>
            </div>
            <div className='chart-bar__label'>{data.label}</div>
        </div>
    )
}

export default ChartBar