import "./ExpenseItem.css"

function ExpenseItem () {

    const expenseDate = new Date(2000,2,20);
    const expenseTitle = "Car Insurance";
    const expensePrice = 30000;

    return (
    <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <h2 className="expense-item__description">{expenseTitle}</h2>
        <div className="expense-item__price">{expensePrice}</div>
    </div>
    );
}

export default ExpenseItem;