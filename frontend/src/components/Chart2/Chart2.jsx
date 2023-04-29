import "./Chart2.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Dev", "Design", "Buisness"],
  datasets: [
    {
      data: [55, 25, 20],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
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
      <p>Effectif des salariés au 1/05/23</p>
      <Doughnut data={data} />
    </div>
  );
}
