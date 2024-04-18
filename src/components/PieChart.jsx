import React from "react";
import { Doughnut } from "react-chartjs-2";
import data from "../data/data.json";
export default function PieChart() {
  let style = {
    margin: "1rem",
    // paddingLeft: "4rem",
  };
  return (
    <div className="dabba" style={style}>
      <Doughnut
        data={{
          labels: data.map((data) => data.label),
          datasets: [
            {
              data: data.map((data) => data.revenue),
              backgroundColor: [
                "red",
                "blue",
                "green",
                "orange",
                "gray",
                "black",
              ],
              borderRadius: 5,
            },
          ],
        }}
      />
    </div>
  );
}
