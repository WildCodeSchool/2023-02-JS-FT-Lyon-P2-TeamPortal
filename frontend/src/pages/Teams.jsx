import { useContext } from "react";
import { NavLink } from "react-router-dom";
import TeamList from "../components/teamList/TeamList";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import UserContext from "../contexts/UserContext";

export default function Teams() {
  const { user } = useContext(UserContext);
  return (
    <div className="background-image">
      <Header />
      <Navbar />
      {user ? (
        <TeamList />
      ) : (
        <NavLink to="/">
          <button type="submit" className="submit-btn">
            Reconnexion
          </button>
        </NavLink>
      )}
    </div>
  );
}
