import './App.css';
import { useState } from 'react';
import Expenses from './components/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense.jsx';
      const DYMMY_EXPENSES = [

        {   
            id: 'id1',
            date: new Date(2021, 0, 10),
            title:'New book',
            price: 30.99
        },
        {
            id: 'id2',
            date: new Date(2021, 5, 5),
            title:'Icecream',
            price: 3.99
        },
        {
            id: 'id3',
            date: new Date(2022, 5, 5),
            title:'Ice',
            price: 5.99
        }
    ]
    function App() {
      const [expenses, setExpenses] = useState(DYMMY_EXPENSES);
    
    const addExpenseHandler = (expense) => {
      console.log('In App.js');
        console.log(expense);
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
    };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}
export default App;