import React from "react";
import ExpenseItems from "./ExpenseItems";

function ExpensesList(props) {
  if (props.item.length == 0) {
    return <h2 className="expenses-list_fallback">Found No Expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((item) => {
        return (
          <ExpenseItems
            key={item.id}
            title={item.title}
            date={item.date}
            amount={item.amount}
            LocationOfExpenditure={item.LocationOfExpenditure}
          />
        );
      })}
      {props.item.length === 1 && (
        <h2 className="expenses-list_fallback">
          Only single Expense here. Please add more...
        </h2>
      )}
    </ul>
  );
}

export default ExpensesList;
