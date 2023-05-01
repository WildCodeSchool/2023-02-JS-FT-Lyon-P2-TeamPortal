import React from "react";
import { NavLink } from "react-router-dom";
import LoginIcon from "../../assets/loginIcon";
import HomeIcon from "../../assets/homeIcon";
import TeamsIcon from "../../assets/teamsIcon";
import LibraryIcon from "../../assets/libraryIcon";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="nav">
        <div className="logo-container">
          <img
            src="../src/assets/teamportal-logo-title.png"
            alt="logo"
            className="logo"
          />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/home">
                <HomeIcon />
                <h3>Home</h3>
              </NavLink>
            </li>
            <li>
              <NavLink to="/teams">
                <TeamsIcon />
                <h3>Teams</h3>
              </NavLink>
            </li>
            <li>
              <NavLink to="/library">
                <LibraryIcon />
                <h3>Library</h3>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="login">
        <NavLink to="/">
          <LoginIcon />
          <h3>Login</h3>
        </NavLink>
      </div>
    </div>
  );
}
