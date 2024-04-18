import React from "react";

export default function AssetsandGoals() {
  let rec = JSON.parse(localStorage.getItem("records") || "[]");
  localStorage.setItem("total", 0);
  let monthly = [];
  for (let i = 1; i <= 12; i++) {
    rec.map((record) =>
      parseInt(record.month) === i
        ? localStorage.setItem(
            "total",
            parseInt(localStorage.getItem("total")) + record.value
          )
        : ""
    );
    monthly.push({
      i: parseInt(localStorage.getItem("total")),
      month: i,
    });
    localStorage.setItem("total", 0);
  }

  console.log(monthly);
  return (
    <>
      <div>
        {monthly.map((record) => {
          console.log(record.month, record.i);
        })}
      </div>
    </>
  );
}
