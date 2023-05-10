import "./Chart2.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

ChartJS.register(ArcElement, Tooltip, Legend);
Chart.defaults.color = "#ffffff";

const data = {
  labels: ["Dev", "Design", "Business"],
  datasets: [
    {
      data: [55, 25, 20],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
      hoverOffset: 4,
    },
  ],
};

export default function Chart2() {
  return (
    <div className="chart2-container">
      <div className="chart2">
        <p>Effectif des salariés au 10/05/23</p>
        <Doughnut data={data} />
      </div>
    </div>
  );
}
