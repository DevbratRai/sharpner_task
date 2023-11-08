import React from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label htmlFor="">Title</label>
          <input type="text" />
        </div>
        <div className="new-expense_control">
          <label htmlFor="">Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>{" "}
        <div className="new-expense_control">
          <label htmlFor="">Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" />
        </div>
      </div>
      <div className=".new-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
