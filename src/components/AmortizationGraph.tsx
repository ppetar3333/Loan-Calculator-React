import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

const AmortizationGraph = (props: any) => {
  const data = {
    labels: ["Principals", "Interest"],
    datasets: [
      {
        data: [props.principal, props.interest],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="doughnut">
      <Doughnut data={data} />
    </div>
  );
};

export default AmortizationGraph;
