import React from "react";
import "./Message.css";

const getTimeString = (timestamp) => {
  const date = new Date(timestamp);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
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

const Message = ({ user, message }) => {
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
            <div className="status-online"></div>
          ) : (
            <div className="status-offline"></div>
          )}
        </div>
        <div className="time-and-date">{getTimeString(message.timestamp)}</div>
      </div>
      <div className="message-and-time">
        <p className="message">{message.content}</p>
      </div>
    </div>
  );
};

export default Message;
