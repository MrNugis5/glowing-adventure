
import './App.css';

import ExpenseItem from "./components/ExpenseItem";


const App = () => {
    return (
    <ExpenseItem expenseData={{
  title: "Groceries",
  price: 42,
  date: new Date(2026, 8, 2)
}} />

    );
};
export default App;