import React from "react";
import { NavLink } from "react-router-dom";
import LogoutIcon from "../../assets/logoutIcon";
import HomeIcon from "../../assets/homeIcon";
import TeamsIcon from "../../assets/teamsIcon";
import LibraryIcon from "../../assets/libraryIcon";
import UserContext from "../../contexts/UserContext";
import logo from "../../assets/teamportal-logo-title.png";

import "./Navbar.css";

export default function Navbar() {
  const { user } = React.useContext(UserContext);
  return (
    <div className="navbar-container">
      <div className="nav">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/home">
                <HomeIcon />
                <h3>Accueil</h3>
              </NavLink>
            </li>
            <li>
              <NavLink to="/teams">
                <TeamsIcon />
                <h3>Equipes</h3>
              </NavLink>
            </li>
            <li>
              <NavLink to="/library">
                <LibraryIcon />
                <h3>Ressources</h3>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {user ? (
        <div className="login">
          <NavLink to="/">
            <LogoutIcon />
            <h3>Déconnexion</h3>
          </NavLink>
        </div>
      ) : (
        <div className="login">
          <NavLink to="/">
            <LogoutIcon />
            <h3>Connexion</h3>
          </NavLink>
        </div>
      )}
    </div>
  );
}
