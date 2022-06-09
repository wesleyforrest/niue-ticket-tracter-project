import React, { useState } from "react";
import "./TrackerCard.scss";
import Counter from "../Counter/Counter";
import Button from "../Button/Button";

const TrackerCard = (props) => {
  const { id, name, role } = props;
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count >= 1) setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="tracker-card">
      <p>{name}</p>
      <p>{role}</p>
      <div className="counter">
        <Counter count={count} />
      </div>
      <div className="button-container">
        {/* Left side of prop can be called anything | right hand side refers to name of function */}
        <Button buttonText="-" handleCount={decrement} />
        <Button buttonText="+" handleCount={increment} />
      </div>
    </div>
  );
};

export default TrackerCard;
