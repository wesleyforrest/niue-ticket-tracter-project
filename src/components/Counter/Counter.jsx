import React from "react";
import "./Counter.scss";

const Counter = (props) => {
  const { count } = props;
  return (
    <div className="counter-container">
      <h2>Counter</h2>
      <h2>{count}</h2>
    </div>
  );
};

export default Counter;
