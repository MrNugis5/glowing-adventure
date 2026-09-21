import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../Expenses/ExpensesFilter";

const Expenses = (props) => {
    const filterChangeHandler = (filteredYear) => {
        console.log("year data in expenses.js", filteredYear);
    };

    return (
        <div className="expenses">
            <ExpensesFilter selected="2023" onChangeYear={filterChangeHandler} />
            {props.expenses.map((expense) => (
                <ExpenseItem key={expense.id} expenseData={expense} />
            ))}
        </div>
    );
};

export default Expenses;

