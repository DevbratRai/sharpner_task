import React from "react";
import "./ExpenseItems.css";

function ExpenseItems() {
  const LocationOfExpenditure = "Lucknow";
  const expenseDate = new Date(2023, 2, 28);
  const expenseTitle = "Food";
  const expensePrice = 300;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div>{LocationOfExpenditure}</div>
      <div className="expense-item_description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item_price">Rs {expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
