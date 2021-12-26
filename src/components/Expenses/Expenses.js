
import React, {useState} from 'react';
import './Expenses.css';
import ExpenceItem from './ExpenseItem'
import ExpensesFilter from './ExpenseFilter'
import ExpensesList from './ExpenseList'
import ExpensesChart from './ExpenseChart';
import Card from '../UI/Card'


const Expenses = (props) => {
  const [filteredYear,setFilteredYear ] = useState('2020')
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteresExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return(
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesChart expenses = {filteresExpenses} />
        <ExpensesList items = {filteresExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;