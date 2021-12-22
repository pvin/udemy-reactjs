
import React, {useState} from 'react';
import './Expenses.css';
import ExpenceItem from './ExpenseItem'
import ExpensesFilter from './ExpenseFilter'
import Card from '../UI/Card'


const Expenses = (props) => {
  const [filteredYear,setFilteredYear ] = useState('2020')
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return(
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {props.items.map((expense, index) =>(
          <ExpenceItem 
            title= {expense.title}
            amount={expense.amount}
            date={expense.date}
            key={index}
          />  
        ))}
      </Card>
    </div>
  );
}

export default Expenses;