import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  
  const [title, setTitle] = useState(props.title);
  const clickHandle = () => {
    console.log(title,'11')
    setTitle('Updated!');
    console.log(title,'222')
  } 
  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandle}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;