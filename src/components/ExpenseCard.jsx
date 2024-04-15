import React from "react";
import "./ExpenseCard.css";
import { color } from "chart.js/helpers";

export default function ExpenseCard({ data }) {
  let style = {};
  if (data.InorOut) {
    style = {
      color: "Green",
    };
  } else {
    style = {
      color: "Red",
    };
  }
  return (
    <>
      <div className="card">
        <div>{data.date}</div>
        {/* <div>{data.InorOut}</div> */}
        <div>{data.type}</div>
        <div>{data.title}</div>
        <div style={style}>{data.value}</div>
      </div>
    </>
  );
}
