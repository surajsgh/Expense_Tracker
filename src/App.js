import React, { useState } from 'react';
import Expenses from './Components/Expenses/Expenses';
import Card from './Components/UI/Card';
import NewExpense from './Components/NewExpenses/NewExpense';
import ExpenseFilter from './Components/Expenses/ExpenseFilter';
import ExpenseChart from './Components/Chart/ExpenseChart';
import './Components/Expenses/Expenses.css';

const DUMMY_EXPENSES = [
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

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [selectYear, setSelectYear] = useState('2021');

  const addExpenseHandler = savedExpenseData => {
    console.log('Save data!');
    setExpenses(prevExpenses => {
      return [savedExpenseData, ...prevExpenses];
    });
    console.log(savedExpenseData);
  };

  const selectYearHandler = selectedYearData => {
    setSelectYear(selectedYearData);
  };

  const filteredExpenses = expenses.filter(
    expense => +expense.date.getFullYear() === +selectYear
  );

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => (
      <Expenses items={expense} />
    ));
  }

  return (
    <Card className="expenses">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseFilter selected={selectYear} onSelectYear={selectYearHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      {expensesContent}
    </Card>
  );
};

export default App;
