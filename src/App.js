import React, { useState } from 'react';
import Expenses from './Components/Expenses/Expenses';
import Card from './Components/UI/Card';
import NewExpense from './Components/NewExpenses/NewExpense';
import ExpenseFilter from './Components/Expenses/ExpenseFilter';
import './Components/Expenses/Expenses.css';

const App = () => {
  const [selectYear, setSelectYear] = useState('2021');
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = savedExpenseData => {
    console.log('Save data!');
    console.log(savedExpenseData);
  };

  const selectYearHandler = selectedYearData => setSelectYear(selectedYearData);

  return (
    <Card className="expenses">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseFilter selected={selectYear} onSelectYear={selectYearHandler} />
      {expenses.map(expense => (
        <Expenses items={expense} />
      ))}
      {/* <Expenses items={expenses[0]} />
      <Expenses items={expenses[1]} />
      <Expenses items={expenses[2]} />
      <Expenses items={expenses[3]} /> */}
    </Card>
  );
};

export default App;
