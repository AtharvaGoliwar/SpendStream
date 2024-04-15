import React from "react";
import salary from "../assets/salary.png";
import ecommerce from "../assets/ecommerce.png";
import shop from "../assets/shop.png";
import adsense from "../assets/adsense.png";

export default function IncomeSource() {
  let style = {
    width: "80%",
    margin: "1rem",
  };
  let style1 = {
    display: "flex",
    justifyContent: "space-between",
  };
  let style2 = {
    fontSize: "14px",
    fontWeight: "600",
  };
  let style3 = {
    fontSize: "12px",
    fontWeight: "200",
  };
  let style4 = {
    // marginBottom: "1rem",
    padding: "0rem 1rem 0rem 1rem",
    // paddingTop: "0rem",
    // paddinBotton: "0rem",
    fontSize: "12px",
    display: "flex",
    flex: "1",
    flexWrap: "wrap",
    width: "100%",
    columnGap: "5%",
    justifyContent: "space-between",
  };
  let style5 = {
    color: "gray",
    fontSize: "11px",
  };
  let style6 = {
    fontSize: "14px",
    fontWeight: "500",
  };
  let style7 = {
    width: "35%",
    height: "60%",
    marginRight: "0.75rem",
  };
  let style8 = {
    width: "40%",
    display: "flex",
    // justifyContent: "space-between",
    marginBottom: "0.75rem",
  };
  return (
    <div style={style}>
      <div style={style1}>
        <div style={style2}>Income Source</div>
        <div style={style3}>View all</div>
      </div>
      <hr />
      <div style={style4}>
        <div style={style8}>
          <img src={salary} alt="" style={style7} />
          <div>
            <div style={style5}>Salary</div>
            <div style={style6}>Rs 13,000</div>
          </div>
        </div>
        <div style={style8}>
          <img src={ecommerce} alt="" style={style7} />
          <div>
            <div style={style5}>E-Commerce</div>
            <div style={style6}>Rs 1,900</div>
          </div>
        </div>
        <div style={style8}>
          <img src={shop} alt="" style={style7} />
          <div>
            <div style={style5}>My Shop</div>
            <div style={style6}>Rs 3,000</div>
          </div>
        </div>
        <div style={style8}>
          <img src={adsense} alt="" style={style7} />
          <div>
            <div style={style5}>Google AdSense</div>
            <div style={style6}>Rs 100</div>
          </div>
        </div>
      </div>
    </div>
  );
}
