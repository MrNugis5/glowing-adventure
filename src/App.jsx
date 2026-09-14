import './App.css';
import Expenses from './components/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense.jsx';
function App() {
    const expenses = [
        {
            date: new Date(2021, 0, 10),
            title:'New book',
            price: 30.99
        },
        {
            date: new Date(2021, 5, 5),
            title:'Icecream',
            price: 3.99
        }
    ]
    const addExpenseHandler = (expense) => {
        console.log('In App.js');
        console.log(expense);
    }


  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;