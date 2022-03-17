import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'
import VCard from "./VCard";

function ExpenseList({expenses}) {
    return (
        <div className="expense__list--container">
            <VCard className="expense__list--box">
                <ExpenseItem expense={expenses[0]}/>
                <ExpenseItem expense={expenses[1]}/>
                <ExpenseItem expense={expenses[2]}/>
                <ExpenseItem expense={expenses[3]}/>
            </VCard>
        </div>
    )
}

export default ExpenseList