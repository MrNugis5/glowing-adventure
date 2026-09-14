import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from './Card.jsx';
import { useState } from 'react';

function ExpenseItem(props){
    const [title, setTitle] = useState(props.expenseData.title);

    const clickHandler = () => {
        setTitle("Updated ${title}");
        console.log(title);
    }
    return (
    <Card>
        <div className="expense-item">
            <ExpenseDate date={props.expenseData.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item__price">{props.expenseData.price}€</div>
            </div>
        </div>
        <button onClick={clickHandler}>Click me</button>
    </Card>
    )
}

export default ExpenseItem