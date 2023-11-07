import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExpenseItems from "./components/ExpenseItems";

function App() {
  const items = [
    {
      title: "Food",
      date: new Date(2023, 4, 29),
      amount: 532,
      LocationOfExpenditure: "Lucknow",
    },
    {
      title: "Petrol",
      date: new Date(2023, 5, 29),
      amount: 322,
      LocationOfExpenditure: "Delhi",
    },
    {
      title: "Movies",
      date: new Date(2023, 7, 29),
      amount: 3233,
      LocationOfExpenditure: "Gurgaon",
    },
    {
      title: "Tv",
      date: new Date(2023, 10, 29),
      amount: 242,
      LocationOfExpenditure: "Gorakhpur",
    },
  ];

  return (
    <>
      {items.map((item) => {
        return (
          <ExpenseItems
            title={item.title}
            date={item.date}
            amount={item.amount}
            LocationOfExpenditure={item.LocationOfExpenditure}
          />
        );
      })}
    </>
  );
}

export default App;
