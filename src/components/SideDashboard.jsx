import React from "react";

export default function SideDashboard({ flag }) {
  let style = flag
    ? {
        height: "100%",
        backgroundColor: "black",
        width: "35rem",
        borderRadius: "20px",
      }
    : {
        height: "100%",
        backgroundColor: "black",
        width: "15rem",
        borderRadius: "20px",
      };
  return <div style={style}></div>;
}
