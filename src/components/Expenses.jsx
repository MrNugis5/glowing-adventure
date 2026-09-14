import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../Expenses/ExpensesFilter";

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState("2023");

    console.log("Expenses - valitud aasta:", selectedYear);

    const yearChangeHandler = (selectedYear) => {
        console.log("Expenses sai uue aasta:", selectedYear);
        setSelectedYear(selectedYear);
    };

    return (
        <div className="expenses">
            <ExpensesFilter
                selected={selectedYear}
                onChangeYear={yearChangeHandler}
            />

            <ExpenseItem expenseData={props.expenses[0]} />
            <ExpenseItem expenseData={props.expenses[1]} />
        </div>
    );
}

export default Expenses;

