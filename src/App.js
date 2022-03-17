import React from "react";
import './App.css'
import ExpenseList from "./component/Expenses/ExpenseList";
import NewExpense from "./component/NewExpense/NewExpense";

const App = () => {
    const onSubmit = (formData) => {
        console.log({
            ...formData,
            id: Math.random().toString()
        })
    }

    const expenses = [
        {
            id: 1,
            title: 'Car Insurance',
            amount: '294.67',
            date: new Date(2021, 2, 28)
        },
        {
            id: 2,
            title: 'New desk (Wooden)',
            amount: '200.17',
            date: new Date(2021, 3, 18)
        },
        {
            id: 3,
            title: 'Pencil',
            amount: '140.07',
            date: new Date(2021, 5, 8)
        },
        {
            id: 4,
            title: 'Flyer',
            amount: '290.78',
            date: new Date(2021, 4, 3)
        }
    ]
    return (
        <div id="app">
            <NewExpense onSubmit={onSubmit}/>
            <ExpenseList expenses={expenses}/>
        </div>
    );
}

export default App;
