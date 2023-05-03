import React, { useState, useEffect } from "react";
import "./TeamList.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import TeamCard from "../teamCard/TeamCard";
import TeamDevData from "../teamData/TeamDevData";
import TeamDesignData from "../teamData/TeamDesignData";
import TeamBusinessData from "../teamData/TeamBusinessData";
import CardModal from "../CardModal/CardModal";

const radios = ["Everyone", "Team DEV", "Team Design", "Team Business"];
export default function TeamList() {
  const [teamData, setTeamData] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("Everyone");

  const [show, setShow] = useState(false);
  const [memberIndex, setMemberIndex] = useState(null);
  const notify = () => toast.error("Sorry, something's wrong !");

  if (memberIndex) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleToggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?page=3&results=30&seed=abc&nat=fr`)
      .then((response) => setTeamData(response.data.results))
      .catch((error) => {
        notify(error.message);
      });
  }, []);

  const whatIsTeam = (member) => {
    if (selectedRadio === "Everyone") {
      return "Everyone";
    }
    if (parseInt(member.registered.age, 10) <= 8) {
      return "Team DEV";
    }
    if (parseInt(member.registered.age, 10) <= 15) {
      return "Team Design";
    }
    if (parseInt(member.registered.age, 10) > 15) {
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
  const filteredUsers = teamData.filter(
    (members) => whatIsTeam(members) === selectedRadio
  );
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
        {filteredUsers.map((members, index) => (
          <button
            className="member-button"
            type="button"
            key={members.location.street.number}
            onClick={() => setMemberIndex(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setMemberIndex(index);
            }}
          >
            <TeamCard members={members} />
          </button>
        ))}
      </div>

      {memberIndex != null && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <CardModal member={filteredUsers[memberIndex]} />
              <button
                type="button"
                className="close-modal"
                onClick={() => setMemberIndex(null)}
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
