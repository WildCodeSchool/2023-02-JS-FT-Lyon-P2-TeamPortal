import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./Chart2.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Dev", "Design", "Buisness"],
  datasets: [
    {
      data: [55, 25, 20],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

export default function Chart2() {
  return (
    <div className="chart2-container">
      <p>Effectif des salariés</p>
      <Doughnut data={data} />
    </div>
  );
}
