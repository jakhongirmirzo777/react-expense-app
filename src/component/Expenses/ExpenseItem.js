import React, {useState} from "react";
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import VCard from "../UI/VCard";

const ExpenseItem = ({expense}) => {
    const [title, setTitle] = useState(expense.title)
    const clickHandler = () => {
        setTitle('Updated')
    }
    return (
        <VCard className="expense-item">
            <ExpenseDate date={expense.date}/>
            <div className="expense-item__description">
                <h2 className="expense-item__title">{title}</h2>
                <div className="expense-item__price">${expense.amount}</div>
            </div>
            <button onClick={clickHandler}>Update</button>
        </VCard>
    )
}

export default ExpenseItem