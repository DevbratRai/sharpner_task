import React from "react";
import "./ExpenseItems.css";

function ExpenseItems(props) {
  // const LocationOfExpenditure = "Lucknow";
  // const expenseDate = new Date(2023, 2, 28);
  // const expenseTitle = "Food";
  // const expensePrice = 300;
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div>{props.LocationOfExpenditure}</div>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">Rs {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
