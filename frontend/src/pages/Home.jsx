import React from "react";
import WeatherWidget from "../components/WeatherWidget/WeatherWidget";
import NewsCard from "../components/NewsCard/NewsCard";
import Chart2 from "../components/Chart_2/Chart2";

export default function Home() {
  return (
    <div className="background-image">
      <div className="home-container">
        <NewsCard />
        <WeatherWidget />
        <Chart2 />
      </div>
    </div>
  );
}
