import ExpenseItem from "./component/ExpenseItem";
import './App.css'

function App() {
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
            amount: '294.67',
            date: new Date(2021, 3, 18)
        },
        {
            id: 3,
            title: 'Pencil',
            amount: '294.67',
            date: new Date(2021, 5, 8)
        },
        {
            id: 4,
            title: 'Flyer',
            amount: '294.67',
            date: new Date(2021, 4, 3)
        }
    ]
    return (
        <div id="app">
            <ExpenseItem expense={expenses[0]}/>
            <ExpenseItem expense={expenses[1]}/>
            <ExpenseItem expense={expenses[2]}/>
            <ExpenseItem expense={expenses[3]}/>
        </div>
    );
}

export default App;
