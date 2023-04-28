import React from "react";
import WeatherWidget from "../components/WeatherWidget/WeatherWidget";
import NewsCard from "../components/NewsCard/NewsCard";

import ChartGroup from "../components/ChartGroup/ChartGroup";

export default function Home() {
  return (
    <div className="background-image">
      <div className="home-container">
        <div className="left-home-container">
          <ChartGroup />
          <WeatherWidget />
        </div>
        <div className="right-home-container">
          <NewsCard />
        </div>
      </div>
    </div>
  );
}
