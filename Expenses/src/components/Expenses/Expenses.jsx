import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import "./ExpenseItems.css";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      {props.arrItem.map((item) => {
        return (
          <>
            <ExpensesFilter
              selected={filteredYear}
              onChangeFilter={filterChangeHandler}
            />
            <ExpenseItems
              title={item.title}
              date={item.date}
              amount={item.amount}
              LocationOfExpenditure={item.LocationOfExpenditure}
            />
          </>
        );
      })}
    </Card>
  );
};

export default Expenses;
