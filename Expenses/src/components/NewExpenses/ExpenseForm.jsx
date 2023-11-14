import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredtitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredtitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredtitle: e.target.value };
    // });
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: e.target.value };
    // });
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: e.target.value };
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredtitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
