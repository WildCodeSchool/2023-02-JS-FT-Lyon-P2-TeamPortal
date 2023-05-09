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
import TodoList from "../components/TodoList/TodoList";
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
            <div className="left-home-container">
              <Chart1 />
              <Chart3 />
              <Chart2 />
            </div>
            <div className="right-home-container">
              <WeatherWidget />
              <NewsCard />
              <Messenger />
              <TodoList />
            </div>
          </>
        ) : (
          <div className="please-container">
            <NavLink to="/">
              <h2 className="please">Cliquer Ici pour Reconnexion</h2>
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
}
