import React from 'react';
import './TeamList.css';
import TeamCard from '../teamCard/TeamCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HERO_API_KEY = import.meta.env.VITE_HERO_API_KEY;

const TeamList = () => {
  const [teamData, setTeamData] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState('Everyone');
  const radios = ['Everyone', 'Team DEV', 'Team Design', 'Team Business'];

  useEffect(() => {
    axios
      .get(`https://www.superheroapi.com/api.php/${HERO_API_KEY}/search/p`)
      .then((response) => setTeamData(response.data.results));
  }, []);

  const whatIsTeam = (member) => {
    if (parseInt(member.powerstats.intelligence) > 80) {
      return 'Team DEV';
    } else if (parseInt(member.powerstats.strength) > 30) {
      return 'Team Design';
    } else {
      return 'Team Business';
    }
  };
  return (
    <div className="TeamList">
      <ul className="radio-container">
        {radios.map((department, index) => (
          <li key={index}>
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
          {selectedRadio !== 'Everyone'
            ? teamData &&
              teamData
                .filter((members) => whatIsTeam(members) === selectedRadio)
                .map((members, index) => (
                  <li key={index}>
                    <TeamCard key={index} members={members} />
                  </li>
                ))
            : teamData &&
              teamData.map((members, index) => (
                <li key={index}>
                  <TeamCard key={index} members={members} />
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamList;
