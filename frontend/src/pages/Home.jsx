import React from "react";
import WeatherWidget from "../components/WeatherWidget/WeatherWidget";
import NewsCard from "../components/NewsCard/NewsCard";
import Chart1 from "../components/Chart1/Chart1";

export default function Home() {
  return (
    <div className="background-image">
      <div className="home-container">
        <div className="left-home-container">
          <Chart1 />
          <WeatherWidget />
        </div>
        <div className="right-home-container">
          <NewsCard />
        </div>
      </div>
    </div>
  );
}
