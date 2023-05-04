import React from "react";
import "./TeamCard.css";
import PropTypes from "prop-types";

function TeamCard({ members }) {
  return (
    <div className="all-cards">
      <div className="team-card">
        <div className="team-card-image-container">
          <img
            src={members.picture.large}
            alt={members.name}
            className="team-card-image"
          />
        </div>
        <div>
          <h1 className="team-card-name">
            {members.name.first} {members.name.last}
          </h1>
        </div>
      </div>
    </div>
  );
}

TeamCard.propTypes = {
  members: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }),
    picture: PropTypes.shape({
      large: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default TeamCard;
