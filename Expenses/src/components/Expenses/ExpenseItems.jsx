import React from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItems = (props) => {
  const updateTitle = () => {
    console.log("title updated");
  };
  const deleteExpense = (e) => {
    console.log(e);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        location={props.LocationOfExpenditure}
        title={props.title}
      />
      <button onClick={updateTitle}>Update Title</button>
      <button onClick={deleteExpense}>Update Title</button>
    </Card>
  );
};

export default ExpenseItems;
