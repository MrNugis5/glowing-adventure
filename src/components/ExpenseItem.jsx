import './ExpenseItem.css'

const ExpenseItem = () => {

    return (
        <div className="expense-item">
            <div>Date</div>
            <div>
                <div className="expense-item__price">Price</div>
                <h2>Title</h2>
            </div>

        </div>
    )
}

export default ExpenseItem