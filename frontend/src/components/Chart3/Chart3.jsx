import React from "react";
import "./Chart3.css";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const labels = [
  "Absentéisme",
  "Déchets",
  "Production",
  "Accidents du travail",
  "Ressources",
  "Bilan carbone",
];

const data = {
  labels,
  datasets: [
    {
      label: "Team dev",
      data: labels.map(() => Math.floor(Math.random() * 10)),
      backgroundColor: "rgb(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 206, 86, 1)",
      borderWidth: 1.5,
    },
    {
      label: "Team Design",
      data: labels.map(() => Math.floor(Math.random() * 10)),
      backgroundColor: "rgb(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
    {
      label: "Team Business",
      data: labels.map(() => Math.floor(Math.random() * 10)),
      backgroundColor: "rgb(255, 205, 86,  0.2)",
      borderColor: "rgb(255, 205, 86)",
      borderWidth: 1.5,
    },
  ],
};

export default function Chart3() {
  return (
    <div className="chart3-container">
      <div className="chart3">
        <p>Indicateurs de l'entreprise</p>
        <Radar data={data} />;
      </div>
    </div>
  );
}
