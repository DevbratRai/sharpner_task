import React from "react";
import "./ExpenseItems.css";

const ExpenseDetails = (props) => {
  return (
    <div className="expense-item_description">
      <h2>{props.title}</h2>
      <h2>{props.location}</h2>
      <div className="expense-item_price">Rs {props.amount}</div>
    </div>
  );
};

export default ExpenseDetails;
