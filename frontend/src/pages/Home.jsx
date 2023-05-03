import WeatherWidget from "../components/WeatherWidget/WeatherWidget";
import NewsCard from "../components/NewsCard/NewsCard";
import ChartGroup from "../components/ChartGroup/ChartGroup";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="home-container">
        <div className="left-home-container">
          <ChartGroup />
          <WeatherWidget />
        </div>
        <div className="right-home-container">
          <NewsCard />
        </div>
      </div>
    </>
  );
}
