import React, { useState, useEffect } from "react";
import "./TeamList.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import TeamCard from "../teamCard/TeamCard";
import TeamDevData from "../teamData/TeamDevData";
import TeamDesignData from "../teamData/TeamDesignData";
import TeamBusinessData from "../teamData/TeamBusinessData";
import CardModal from "../CardModal/CardModal";

const HERO_API_KEY = import.meta.env.VITE_HERO_API_KEY;

export default function TeamList() {
  const [teamData, setTeamData] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("Everyone");
  const radios = ["Everyone", "Team DEV", "Team Design", "Team Business"];
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);
  const [memberIndex, setMemberIndex] = useState(0);
  const notify = () => toast.error("Sorry, something's wrong !");

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleToggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    axios
      .get(`https://www.superheroapi.com/api.php/${HERO_API_KEY}/search/w`)
      .then((response) => setTeamData(response.data.results))
      .catch((error) => {
        notify(error.message);
      });
  }, []);

  const whatIsTeam = (member) => {
    if (selectedRadio === "Everyone") {
      return "Everyone";
    }
    if (parseInt(member.powerstats.intelligence, 10) > 70) {
      return "Team DEV";
    }
    if (parseInt(member.powerstats.strength, 10) > 30) {
      return "Team Design";
    }
    if (parseInt(member.powerstats.speed, 10) > 20) {
      return "Team Business";
    }
    return null;
  };

  const whatIsTeamData = () => {
    if (selectedRadio === "Team DEV") {
      return <TeamDevData />;
    }
    if (selectedRadio === "Team Design") {
      return <TeamDesignData />;
    }
    if (selectedRadio === "Team Business") {
      return <TeamBusinessData />;
    }
    return null;
  };

  const getMemberByIndex = (index) => {
    // console.log(`l'index est de ${index}`);
    setMemberIndex(index);
    setModal(true);
  };

  // console.log(`member index est égal à ${memberIndex}`);

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
      {selectedRadio !== "Everyone" ? (
        <button type="button" className="btn-toggle" onClick={handleToggle}>
          Show details
        </button>
      ) : (
        ""
      )}
      {show ? whatIsTeamData() : ""}

      <div className={show ? "small-team-members" : "great-team-members"}>
        {teamData &&
          teamData
            .filter((members) => whatIsTeam(members) === selectedRadio)
            .map((members, index) => (
              <button
                className="member-button"
                type="button"
                key={members.id}
                onClick={() => getMemberByIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") getMemberByIndex(index);
                }}
              >
                <TeamCard members={members} />
              </button>
            ))}
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <CardModal member={teamData[memberIndex]} />
              <button
                type="button"
                className="close-modal"
                onClick={toggleModal}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
      <div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
}
