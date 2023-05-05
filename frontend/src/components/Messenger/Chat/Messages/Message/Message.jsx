import React from "react";
import PropTypes from "prop-types";
import "./Message.css";

const getTimeString = (timestamp) => {
  const date = new Date(timestamp);
  const daysOfWeek = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${dayOfWeek}, ${dayOfMonth} ${month} ${year}, à ${hours}:${minutes}:${seconds}`;
};

function Message({ user, message }) {
  return (
    <div className="Message">
      <div className="user-info">
        <div className="picture-name-status">
          <img className="avatar" src={user.picture} alt="" />
          {user.status === "online" ? (
            <p className="username-online">
              {user.firstName} {user.lastName}
            </p>
          ) : (
            <p className="username-offline">
              {user.firstName} {user.lastName}
            </p>
          )}
          {user.status === "online" ? (
            <div className="status-online" />
          ) : (
            <div className="status-offline" />
          )}
        </div>
        <div className="time-and-date">{getTimeString(message.timestamp)}</div>
      </div>
      <div className="message-and-time">
        <p className="message">{message.content}</p>
      </div>
    </div>
  );
}

Message.propTypes = {
  user: PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  message: PropTypes.shape({
    content: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
  }).isRequired,
};

export default Message;
