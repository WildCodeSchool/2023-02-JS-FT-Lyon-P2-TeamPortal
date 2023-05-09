import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./Chart1.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Mon Activité Annuelle",
      color: "white",
    },
  },
};

const labels = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aôut",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Objectifs",
      data: labels.map(() => Math.floor(Math.random() * 100)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Résultats Individuels",
      data: labels.map(() => Math.floor(Math.random() * 100)),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function Chart1() {
  return (
    <div className="chart1-container">
      <div className="chart1">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}

export default Chart1;
