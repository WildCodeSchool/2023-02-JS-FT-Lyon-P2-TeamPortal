import React from "react";
import WeatherWidget from "../components/WeatherWidget/WeatherWidget";
import NewsCard from "../components/NewsCard/NewsCard";

export default function Home() {
  return (
    <div className="background-image">
      <div className="home-container">
        <NewsCard />
        <WeatherWidget />
      </div>
    </div>
  );
}
