import React from "react";
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import "./ExpenseItems.css";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.arrItem.map((item) => {
        return (
          <ExpenseItems
            title={item.title}
            date={item.date}
            amount={item.amount}
            LocationOfExpenditure={item.LocationOfExpenditure}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
