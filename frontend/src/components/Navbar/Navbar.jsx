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
        <nav>
          <ul>
            <li>
              <NavLink to="/">
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
        <NavLink to="/login">
          <LoginIcon />
          <h3>Login</h3>
        </NavLink>
      </div>
    </div>
  );
}
