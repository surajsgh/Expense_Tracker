import ExpenseItem from './ExpenseItem.js';
// import './Expenses.css';

function Expenses(props) {
  return (
    <div>
      <ExpenseItem
        title={props.items.title}
        amount={props.items.amount}
        date={props.items.date}
      />
      {/* <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </div>
  );
}

export default Expenses;
