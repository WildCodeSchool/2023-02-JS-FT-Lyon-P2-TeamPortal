import React from "react";
import PropTypes from "prop-types";
import "./CardModal.css";

function CardModal({ member }) {
  return (
    <div className="modal-container">
      <img className="imgModal" src={member.image.url} alt={member.name} />
      <div className="modalBox">
        <h1 className="member-title">{member.name}</h1>
        <p className="job-title">Développeur Front-End</p>
        <p className="gender">{member.appearance.gender}</p>
        <p className="appearance">
          {member.appearance.height[1]} , {member.appearance.weight[1]}
        </p>
        <p className="occupation">Occupation : {member.work.occupation}</p>
        <p className="base">Base : {member.work.base}</p>
      </div>
    </div>
  );
}

CardModal.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    appearance: PropTypes.shape({
      gender: PropTypes.string.isRequired,
      height: PropTypes.arrayOf(PropTypes.string).isRequired,
      weight: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    work: PropTypes.shape({
      occupation: PropTypes.string.isRequired,
      base: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default CardModal;
