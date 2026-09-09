import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
    console.log(props);

    return (
        <div className="expenses">
            <ExpenseItem expenseData={props.expenses[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.expenses[1]}></ExpenseItem>
        </div>
    );
}

export default Expenses;
