import React from "react";
import PropTypes from "prop-types";
import "./CardModal.css";

function CardModal({ member }) {
  const whatIsJob = (user) => {
    if (parseInt(user.registered.age, 10) <= 6) {
      return "Developpeur Front-End";
    }
    if (parseInt(user.registered.age, 10) <= 8) {
      return "Developpeur Back-End";
    }
    if (parseInt(user.registered.age, 10) <= 10) {
      return " Design UX / UI";
    }
    if (parseInt(user.registered.age, 10) <= 15) {
      return "Graphiste";
    }
    if (parseInt(user.registered.age, 10) > 15) {
      return "Business manager";
    }
    if (parseInt(user.registered.age, 10) > 18) {
      return "Co-directeur";
    }
    return null;
  };

  return (
    <div className="modal-container">
      <img
        className="img-modal"
        src={member.picture.large}
        alt={member.name.first}
      />
      <div className="modal-box">
        <h1 className="member-title">
          {member.name.first} {member.name.last}
        </h1>
        <p className="job-title">{whatIsJob(member)}</p>
        <p className="appearance-text">{member.dob.age} ans</p>
        <p className="base-text">
          Adresse :{" "}
          <span className="important-text-color">
            {member.location.city}, {member.location.state}
          </span>
        </p>
        <p className="occupation-text">
          Membre depuis :{" "}
          <span className="important-text-color">
            {member.registered.age} ans
          </span>
        </p>
        <button
          className="mail-btn"
          type="button"
          onClick={() => {
            window.location = `mailto:${member.email}`;
          }}
        >
          Contacter {member.name.first}
        </button>
      </div>
    </div>
  );
}

CardModal.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
    gender: PropTypes.string.isRequired,
    dob: PropTypes.shape({
      age: PropTypes.string.isRequired,
    }).isRequired,
    registered: PropTypes.shape({
      age: PropTypes.string.isRequired,
    }).isRequired,
    email: PropTypes.string.isRequired,
    location: PropTypes.shape({
      state: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }).isRequired,
    picture: PropTypes.shape({
      large: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CardModal;
