import React from "react";
import WeatherWidget from "../components/WeatherWidget/WeatherWidget";
import NewsCard from "../components/NewsCard/NewsCard";
import Chart1 from "../components/Chart1/Chart1";
import Chart2 from "../components/Chart2/Chart2";
import Chart3 from "../components/Chart3/Chart3";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Messenger from "../components/Messenger/Messenger";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="home-container">
        <div className="top-home-container">
          <Chart1 />
          <Chart2 />
          <Chart3 />
        </div>
        <div className="bottom-home-container">
          <div className="left-home-container">
            <WeatherWidget />
            <Messenger />
          </div>
          <div className="right-home-container">
            <NewsCard />
          </div>
        </div>
      </div>
    </>
  );
}
