import React, { useState } from "react";
import ExpenseCard from "./ExpenseCard";
import "./PrevTransactions.css";

export default function PrevTransactions() {
  let style1 = {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "1rem",
    // width: "25vw",
  };
  let style2 = {
    fontSize: "14px",
    fontWeight: "600",
  };
  let style3 = {
    fontSize: "12px",
    fontWeight: "200",
  };
  //   let style2 = {
  //     fontSize: "14px",
  //     fontWeight: "600",
  //     marginTop: "2rem",
  //   };
  //   let style3 = {
  //     marginRight: "1rem",
  //   };
  let rec = JSON.parse(localStorage.getItem("records") || "[]");
  return (
    <>
      <div style={style1}>
        <div style={style2}>Previous Transactions</div>
        <div className="view" style={style3}>
          View all
        </div>
      </div>
      <hr style={{ marginRight: "1rem" }} />
      <div style={{ marginBottom: "2rem" }}>
        {/* <div className="card"> */}
        {/* <ExpenseCard
          data={{
            date: 12,
            month: 2,
            year: 2024,
            type: "Food",
            title: "Fast Food",
            value: 500,
            InorOut: true,
          }}
        />
        <ExpenseCard
          data={{
            date: 12,
            month: 2,
            year: 2024,
            type: "Food",
            title: "Fast Food ",
            value: 500,
            InorOut: 0,
          }}
        />
        <ExpenseCard
          data={{
            date: 12,
            month: 2,
            year: 2024,
            type: "Food",
            title: "Fast Food",
            value: 500,
            InorOut: 0,
          }}
        />
        <ExpenseCard
          data={{
            date: 12,
            month: 2,
            year: 2024,
            type: "Food",
            title: "Fast Food",
            value: 500,
            InorOut: 1,
          }}
        />
        <ExpenseCard
          data={{
            date: 12,
            month: 2,
            year: 2024,
            type: "Food",
            title: "Fast Food",
            value: 500,
            InorOut: 0,
          }}
        /> */}
        {rec.map(
          (record, ind) =>
            ind >= rec.length - 5 && (
              <ExpenseCard
                data={{
                  date: record.date,
                  month: record.month,
                  year: record.year,
                  type: record.type,
                  title: record.title,
                  value: record.value,
                  InorOut: record.InorOut,
                }}
              />
            )
        )}
      </div>
    </>
  );
}
