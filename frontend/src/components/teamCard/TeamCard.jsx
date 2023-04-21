import React from 'react';
import './TeamCard.css';
import PropTypes from 'prop-types';

const TeamCard = ({ members }) => {
  return (
    <div className="AllCards">
      <div className="TeamCard">
        <div className="TeamCardImage">
          <img src={members.image.url} alt={members.name}></img>
        </div>
        <div>
          <h1 className="TeamCardName">{members.name}</h1>
        </div>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  members: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TeamCard;
