import React from "react";
import "./Input.css";
import send from "../assets/send.png";
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
    width: "80%",
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
  return (
    <>
      <div style={style2}>Track Expense</div>
      <hr style={style3} />
      <div style={style}>
        <div style={style4}>
          <div className="dropdown">
            <button className="dropbtn">Income</button>
            <div className="dropdown-content">
              <a href="#">Income</a>
              <a href="#">Expense</a>
            </div>
          </div>
          <div>
            <div className="dropdown">
              <button className="dropbtn">Type</button>
              <div className="dropdown-content">
                <a href="#">Link1</a>
                <a href="#">Link2</a>
                <a href="#">Link3</a>
              </div>
            </div>
          </div>
          {/* <input type="number" /> */}
          <div className="inputdiv">
            <input type="text" name="" id="input1" placeholder="Describe" />
          </div>
          <div className="inputdiv">
            <input
              type="number"
              name=""
              id="input"
              placeholder="Enter Amount"
            />
          </div>
          <img src={send} alt="" />
        </div>
      </div>
    </>
  );
}
