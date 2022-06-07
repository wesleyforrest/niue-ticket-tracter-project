import React from "react";
import "./TrackerCard.scss";
import Counter from "../Counter/Counter";

const TrackerCard = (props) => {
  const { id, name, role } = props;

  return (
    <div className="tracker-card">
      <p>{name}</p>
      <p>{role}</p>
      <Counter />
    </div>
  );
};

export default TrackerCard;
