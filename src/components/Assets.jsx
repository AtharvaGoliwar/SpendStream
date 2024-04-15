import React from "react";

export default function Assets() {
  let style = {
    marginLeft: "1rem",
    marginRight: "1rem",
    padding: "1rem",
    fontWeight: "600",
    marginBottom: "0rem",
  };
  let style1 = {
    textDecoration: "underline",
    textDecorationColor: "gray",
  };
  let style2 = {
    marginBottom: "1rem",
    padding: "1rem",
    paddingTop: "0rem",
    fontSize: "12px",
    display: "flex",
    flex: "1",
    flexWrap: "wrap",
    width: "100%",
    columnGap: "5%",
    justifyContent: "space-between",
  };
  let style3 = {
    color: "gray",
  };
  let style4 = {
    fontWeight: "500",
  };
  let style5 = {
    width: "35%",
    height: "40%",
    marginTop: "1rem",
  };

  return (
    <>
      <div style={style5}>
        <div style={style}>
          <span style={style1}>Ass</span>ets
        </div>
        <div style={style2}>
          <div>
            <div style={style3}>Gold</div>
            <div style={style4}>Rs 1,00,000</div>
          </div>
          <div>
            <div style={style3}>WareHouse</div>
            <div style={style4}>Rs 15,00,000</div>
          </div>
          <div>
            <div style={style3}>Stock</div>
            <div style={style4}>Rs 50,00,000</div>
          </div>
          <div>
            <div style={style3}>Land</div>
            <div style={style4}>Rs 1,00,00,000</div>
          </div>
        </div>
      </div>
    </>
  );
}
