import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import "./ExpenseItems.css";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.arrItem.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((item) => {
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
    </Card>
  );
};

export default Expenses;
