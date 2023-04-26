import React from "react";
import InfoText from "../InfoText/InfoText";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <h1>
        Team<span id="title">Portal</span>
      </h1>
      <InfoText />
    </header>
  );
}
