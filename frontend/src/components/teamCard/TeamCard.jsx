import React from "react";
import "./TeamCard.css";
import PropTypes from "prop-types";

function TeamCard({ members }) {
  return (
    <div className="all-cards">
      <div className="team-card">
        <div className="team-card-image-container">
          <img
            src={members.image.url}
            alt={members.name}
            className="team-card-image"
          />
        </div>
        <div>
          <h1 className="team-card-name">{members.name}</h1>
        </div>
      </div>
    </div>
  );
}

TeamCard.propTypes = {
  members: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TeamCard;
