import React from "react";
import "./ExpenseCard.css";
import { color } from "chart.js/helpers";
import img1 from "../assets/edit.png";
import img2 from "../assets/delete.png";

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
        <div>
          {data.date}/{data.month}/{data.year}
        </div>
        {/* <div>{data.InorOut}</div> */}
        <div>{data.type}</div>
        <div style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}>
          {data.title}
        </div>
        <div style={style}>{data.value}</div>
        <div className="imgs">
          <img className="edit" src={img1} alt="" />
          <img className="delete" src={img2} alt="" />
        </div>
      </div>
    </>
  );
}
