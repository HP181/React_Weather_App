import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props) {
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `${minutes}`;
  }

  return (
    <div className="FormattedDate">
      updated{" "}
      <span className="textLeft">
        {hours}:{minutes}
      </span>
    </div>
  );
}
