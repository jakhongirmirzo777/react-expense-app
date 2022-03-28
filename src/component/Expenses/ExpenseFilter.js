import React from "react";
import './ExpenseFilter.css'

const ExpenseFilter = ({filteredYear, filterChangeHandler}) => {
    const years = [2019, 2020, 2021, 2022]
    const handleSelect = (e) => {
        filterChangeHandler(e.target.value)
    }
    return (
        <div className='expense-filter'>
            <div>
                Filter by year
            </div>
            <div>
                <select className='expense-filter__select' value={filteredYear} onChange={handleSelect}>
                    {years.map((year, index) => <option key={index}>{year}</option>)}
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter