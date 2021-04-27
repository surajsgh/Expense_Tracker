import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = props => {
  // Must be called directly inside the component function.
  // useState always returns the two values: the first one managed variable value and the second one is a function to change it.
  const [title, setTitle] = useState(props.title);

  // let title = props.title;

  //  Event handler function
  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
    console.log(`Clicked!`);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click here!</button>
    </Card>
  );
};

export default ExpenseItem;
