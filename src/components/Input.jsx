import React, { useState } from "react";
import "./Input.css";
import send from "../assets/send.png";
import records from "../data/records.json";
export default function Input() {
  let style = {
    // marginTop: "0.5rem",
    border: "1px solid black",
    // height: "7.5%",
    marginRight: "1rem",
    borderRadius: "10px",
    boxShadow: "0px 5px 10px grey",
    marginBottom: "1rem",
    marginLeft: "1rem",
    width: "100%",
    padding: "0.5rem",
  };
  let style2 = {
    fontSize: "14px",
    fontWeight: "600",
    marginLeft: "1rem",
  };
  let style3 = {
    marginLeft: "1rem",
    width: "80%",
  };
  let style4 = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  //   let dropbtn = {
  //     backgroundColor: "#04AA6D",
  //     color: "white",
  //     padding: "16px",
  //     fontSize: "16px",
  //     border: "none",
  //   };
  //   let dropdown = {
  //     position: "relative",
  //     display: "inline-block",
  //   };
  //   let dropdownContent = {
  //     display: "none",
  //     position: "absolute",
  //     backgroundColor: "#f1f1f1",
  //     minWidth: "160px",
  //     boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
  //     zIndex: "1",
  //   };
  const [descText, setDescText] = useState("");
  const [amtText, setAmt] = useState("");
  const [type, setType] = useState("Type");
  const [category, setCategory] = useState("Category");
  const [date, setDate] = useState(new Date());
  let rec = JSON.parse(localStorage.getItem("records") || "[]");
  console.log(rec);
  const handleChange = (e) => {
    setDescText(e.target.value);
  };
  const handleChange1 = (e) => {
    setAmt(e.target.value);
  };
  const writeData = () => {
    if (
      category === "Category" ||
      type === "Type" ||
      descText === "" ||
      amtText === ""
    ) {
    } else {
      rec.push({
        date: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        type: category,
        title: descText,
        value: parseInt(amtText),
        InorOut: type === "Income" ? 1 : 0,
      });
      localStorage.setItem("records", JSON.stringify(rec));
    }
    // records.push({
    //   date: date.getDate(),
    //   month: date.getMonth(),
    //   year: date.getFullYear(),
    //   type: category,
    //   title: descText,
    //   value: parseInt(amtText),
    //   InorOut: type === "Income" ? 1 : 0,
    // });
    console.log(JSON.parse(localStorage.getItem("records") || "[]"));
    window.location.reload();
  };
  return (
    <>
      <div style={style2}>Track Expense</div>
      <hr style={style3} />
      <div className="inputFullBox" style={style}>
        <div style={style4}>
          <div className="dropdown">
            <button className="dropbtn">{type}</button>
            <div className="dropdown-content">
              <a onClick={() => setType("Income")}>Income</a>
              <a onClick={() => setType("Expense")}>Expense</a>
            </div>
          </div>
          <div>
            <div className="dropdown">
              <button className="dropbtn">{category}</button>
              <div className="dropdown-content">
                <a onClick={() => setCategory("Food")}>Food</a>
                <a onClick={() => setCategory("Shopping")}>Shopping</a>
                <a onClick={() => setCategory("Transportation")}>
                  Transportation
                </a>
                <a onClick={() => setCategory("Other")}>Other</a>
              </div>
            </div>
          </div>
          {/* <input type="number" /> */}
          <div className="inputdiv">
            <input
              type="text"
              name=""
              id="input1"
              placeholder="Describe"
              onChange={handleChange}
              value={descText}
            />
          </div>
          <div className="inputdiv">
            <input
              type="number"
              name=""
              id="input"
              placeholder="Enter Amount"
              onChange={handleChange1}
              value={amtText}
            />
          </div>
          <img src={send} alt="" onClick={() => writeData()} />
        </div>
      </div>
    </>
  );
}
