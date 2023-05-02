import React, { useContext } from "react";
import InfoText from "../InfoText/InfoText";
import UserContext from "../../contexts/UserContext";
import "./Header.css";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <header>
      <div className="header-top">
        <h1>
          Team<span id="header-title">Portal</span>
        </h1>
        {user && (
          <p>
            <b>Online User :</b> {user.email}
          </p>
        )}
      </div>
      <InfoText />
    </header>
  );
}
