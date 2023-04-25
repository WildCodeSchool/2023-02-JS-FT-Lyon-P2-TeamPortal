import React, { useState, useEffect } from "react";
import "./TeamList.css";
import axios from "axios";
import TeamCard from "../teamCard/TeamCard";

const HERO_API_KEY = import.meta.env.VITE_HERO_API_KEY;

function TeamList() {
  const [teamData, setTeamData] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("Everyone");
  const radios = ["Everyone", "Team DEV", "Team Design", "Team Business"];

  useEffect(() => {
    axios
      .get(`https://www.superheroapi.com/api.php/${HERO_API_KEY}/search/p`)
      .then((response) => setTeamData(response.data.results))
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  const whatIsTeam = (member) => {
    if (parseInt(member.powerstats.intelligence, 10) > 80) {
      return "Team DEV";
    }
    if (parseInt(member.powerstats.strength, 10) > 30) {
      return "Team Design";
    }
    return "Team Business";
  };
  return (
    <div className="TeamList">
      <ul className="radio-container">
        {radios.map((department) => (
          <li key={department}>
            <input
              type="radio"
              id={department}
              name="departmentRadio"
              checked={department === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={department}>{department}</label>
          </li>
        ))}
      </ul>
      <div className="TeamMembers">
        <ul>
          {selectedRadio !== "Everyone"
            ? teamData &&
              teamData
                .filter((members) => whatIsTeam(members) === selectedRadio)
                .map((members) => (
                  <li key={members.name}>
                    <TeamCard members={members} />

                  </li>
                ))
            : teamData &&
              teamData.map((members) => (
                <li key={members.name}>
                  <TeamCard members={members} />
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
}

export default TeamList;
