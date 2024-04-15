import React from "react";
import Box from "./Box";

export default function IncomeBar() {
  let style = {
    width: "80%",
    // paddingTop: "2rem",
    borderRadius: "20px",
    marginLeft: "1rem",
    marginRight: "1rem",
    marginBotton: "1rem",
  };
  let style1 = {
    display: "flex",
    justifyContent: "space-between",
  };
  let style2 = {
    fontSize: "10px",
    color: "gray",
  };
  let style3 = {
    fontSize: "12px",
  };
  let style4 = {
    fontSize: "14px",
    fontWeight: "600",
    color: "black",
  };
  let style5 = {
    fontSize: "14px",
    color: "gray",
    display: "flex",
    alignItems: "center",
  };
  let style6 = {
    width: "90%",
    height: "5%",
    backgroundColor: "black",
    borderRadius: "20px",
  };

  return (
    <>
      <div style={style}>
        <div>
          <div style={style1}>
            <div style={style2}>
              <div style={style3}>Income Goal</div>
              <div>Progress To Month</div>
            </div>
            <div style={style5}>
              <span style={style4}>Rs 18000 /</span> Rs 25000
            </div>
          </div>
        </div>
        <Box />
      </div>
    </>
  );
}
