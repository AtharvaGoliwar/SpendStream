import React from "react";
import Card from "./Card";
import Assets from "./Assets";
import IncomeBar from "./IncomeBar";
import IncomeSpendingCard from "./IncomeSpendingCard";
import IncomeSource from "./IncomeSource";
import PieChart from "./PieChart";
import Input from "./Input";
import PrevTransactions from "./PrevTransactions";
import "./Table.css";

export default function Table() {
  const style = {
    width: "80%",
    // height: "85%",
    border: "2px solid #14d314",
    borderRadius: 20,
    marginTop: "8%",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0px 5px 10px grey",
    backgroundColor: "#f9f9f9",
    display: "flex",
    // flexWrap: "wrap",
    gap: "10%",
  };
  let style1 = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <>
      <div className="table" style={style}>
        <div>
          <div className="abc" style={style1}>
            <Card />
            <Assets />
          </div>
          <div className="incomeBar">
            <IncomeBar />
          </div>
          <div>
            <IncomeSpendingCard />
          </div>
          <div>
            <IncomeSource />
          </div>
          <Input />
        </div>
        <div>
          {/* hello */}
          <PieChart />
          {/* <CardSlider /> */}
          {/* <CardSliderNew /> */}
          <PrevTransactions />
        </div>
      </div>
    </>
  );
}
