import React from "react";
import "./NewExpense.css"
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = ({onSubmit}) => {
    return (
        <div className="new-expense">
            <NewExpenseForm onSubmit={onSubmit}/>
        </div>
    )
}

export default NewExpense