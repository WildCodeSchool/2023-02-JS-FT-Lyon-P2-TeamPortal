import { useContext } from "react";
import { NavLink } from "react-router-dom";
import WeatherWidget from "../components/WeatherWidget/WeatherWidget";
import NewsCard from "../components/NewsCard/NewsCard";
import Chart1 from "../components/Chart1/Chart1";
import Chart2 from "../components/Chart2/Chart2";
import Chart3 from "../components/Chart3/Chart3";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Messenger from "../components/Messenger/Messenger";
import UserContext from "../contexts/UserContext";

export default function Home() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Header />
      <Navbar />
      <div className="home-container">
        {user ? (
          <>
            <div className="top-home-container">
              <Chart1 />
              <Chart2 />
              <Chart3 />
            </div>
            <div className="bottom-home-container">
              <div className="bottom-left-home-container">
                <WeatherWidget />
                <Messenger />
              </div>
              <div className="bottom-right-home-container">
                <NewsCard />
              </div>
            </div>
          </>
        ) : (
          <NavLink to="/">
            <h2 className="please">LogIn</h2>
          </NavLink>
        )}
      </div>
    </>
  );
}
