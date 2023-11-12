import React, { useState } from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItems = (props) => {
  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.amount);
  const updateTitle = () => {
    setTitle("updated");
    console.log(title);
  };
  // const deleteExpense = (e) => {
  //   console.log(e);
  // };
  const updatePrice = () => {
    setPrice(price + 100);
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          amount={price}
          location={props.LocationOfExpenditure}
          title={title}
        />
        <button onClick={updateTitle}>Update Title</button>
        {/* <button onClick={deleteExpense}>Delete</button> */}
        <button onClick={updatePrice}>Update Price</button>
      </Card>
    </li>
  );
};

export default ExpenseItems;
