import React from "react";
import WeatherWidget from "../components/WeatherWidget/WeatherWidget";
import NewsCard from "../components/NewsCard/NewsCard";
import Chart1 from "../components/Chart1/Chart1";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="home-container">
        <div className="left-home-container">
          <Chart1 />
          <WeatherWidget />
        </div>
        <div className="right-home-container">
          <NewsCard />
        </div>
      </div>
    </>
  );
}
