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
    // width: "80rem",
    // height: "80rem",
    border: "2px solid #14d314",
    borderRadius: 20,
    marginTop: "8%",
    // marginLeft: "auto",
    // marginRight: "auto",
    boxShadow: "0px 5px 10px grey",
    backgroundColor: "#f9f9f9",
    display: "flex",
    // flexWrap: "wrap",
    gap: "10%",
    marginLeft: "1rem",
    marginRight: "1rem",
    justifyContent: "flex-start",
  };
  let style1 = {
    display: "flex",
    justifyContent: "flex-start",
  };
  return (
    <>
      <div className="table" style={style}>
        <div className="left-div" style={{ width: "90%" }}>
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
