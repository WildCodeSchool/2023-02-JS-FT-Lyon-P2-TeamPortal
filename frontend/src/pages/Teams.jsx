import React from "react";
import TeamList from "../components/teamList/TeamList";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

export default function Teams() {
  return (
    <div className="background-image">
      <Header />
      <Navbar />
      <TeamList />
    </div>
  );
}
