import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  const removeItemHandler = () => {
    props.onRemove(props.id);
  };
  return (
    <div>
      <li className={classes.movie}>
        <h2>{props.title}</h2>
        <h3>{props.releaseDate}</h3>
        <p>{props.openingText}</p>
        <button onClick={removeItemHandler}>Remove List</button>
      </li>
    </div>
  );
};

export default Movie;
