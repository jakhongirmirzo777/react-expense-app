import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'
import VCard from "../UI/VCard";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const ExpenseList = ({expenses}) => {
    const [filteredYear, setFilteredYear] = useState('2021')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear)
    return (
        <div className="expense__list--container">
            <VCard className="expense__list--box">
                <ExpenseFilter filteredYear={filteredYear} filterChangeHandler={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <div>
                    {!filteredExpenses.length && <h2 className='expense__not-found'>Found no expenses!</h2>}
                    {filteredExpenses.length > 0 && filteredExpenses.map(expense => <ExpenseItem key={expense.id}
                                                                                                 expense={expense}/>)}
                </div>
            </VCard>
        </div>
    )
}

export default ExpenseList