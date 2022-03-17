import React from "react";
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import VCard from "../UI/VCard";

const ExpenseItem = ({expense}) => {
    return (
        <VCard className="expense-item">
            <ExpenseDate date={expense.date}/>
            <div className="expense-item__description">
                <h2 className="expense-item__title">{expense.title}</h2>
                <div className="expense-item__price">${expense.amount}</div>
            </div>
        </VCard>
    )
}

export default ExpenseItem