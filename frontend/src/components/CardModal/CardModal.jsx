import React from "react";
import PropTypes from "prop-types";
import "./CardModal.css";

function CardModal({ member }) {
  const whatIsJob = (user) => {
    if (parseInt(user.registered.age, 10) <= 6) {
      return "Dev Front-End";
    }
    if (parseInt(user.registered.age, 10) <= 8) {
      return "Dev Back-End";
    }
    if (parseInt(user.registered.age, 10) <= 10) {
      return "UX / UI";
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
        <p className="gender-text">{member.gender}</p>
        <p className="appearance-text">{member.dob.age} ans</p>
        <p className="occupation-text">
          Occupation : {member.location.street.number}
        </p>
        <p className="base-text">
          Adress : {member.location.state}, {member.location.country}
        </p>
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
      age: PropTypes.number.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      state: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      street: PropTypes.shape({
        number: PropTypes.number.isRequired,
      }),
    }).isRequired,
    picture: PropTypes.shape({
      large: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CardModal;
