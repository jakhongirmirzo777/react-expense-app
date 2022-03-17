import React, {useState} from "react";
import "./NewExpenseForm.css"

const FORM = {
    title: '',
    amount: '',
    date: ''
}

const NewExpenseForm = () => {
    const [form, setForm] = useState({...FORM})

    const onInputChange = (type) => {
        return (e) => setForm((prevState) => ({
            ...prevState,
            [type]: e?.target?.value || ''
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={form.title} onChange={onInputChange('title')}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={form.amount} min="0.01" step="0.01" onChange={onInputChange('amount')}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={form.date} min="2019-01-01" max="2022-12-31"
                           onChange={onInputChange('date')}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default NewExpenseForm