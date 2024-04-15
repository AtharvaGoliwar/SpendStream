import React from "react";
import ExpenseCard from "./ExpenseCard";

export default function PrevTransactions() {
  let style1 = {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "1rem",
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
  return (
    <>
      <div style={style1}>
        <div style={style2}>Previous Transactions</div>
        <div style={style3}>View all</div>
      </div>
      <hr style={{ marginRight: "1rem" }} />
      <div>
        {/* <div className="card"> */}
        <ExpenseCard
          data={{
            date: "12/02/24",
            type: "Food",
            title: "Fast Food",
            value: 500,
            InorOut: true,
          }}
        />
        <ExpenseCard
          data={{
            date: "12/02/24",
            type: "Food",
            title: "Fast Food",
            value: 500,
            InorOut: false,
          }}
        />
        <ExpenseCard
          data={{
            date: "12/02/24",
            type: "Food",
            title: "Fast Food",
            value: 500,
            InorOut: false,
          }}
        />
        <ExpenseCard
          data={{
            date: "12/02/24",
            type: "Food",
            title: "Fast Food",
            value: 500,
            InorOut: true,
          }}
        />
        <ExpenseCard
          data={{
            date: "12/02/24",
            type: "Food",
            title: "Fast Food",
            value: 500,
            InorOut: false,
          }}
        />
      </div>
    </>
  );
}
