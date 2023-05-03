import React from "react";
import "./Messages.css";
import usersList from "../../assets/usersList.js";
import Message from "./Message/Message";

const Messages = ({ messages }) => {
  return (
    <ol className="Messages">
      {messages.map((message, index) => (
        <li key={index}>
          <Message user={getUserById(message.authorId)} message={message} />
        </li>
      ))}
    </ol>
  );
};

const getUserById = (id) => {
  for (const user of usersList) {
    if (user.uuid === id) return user;
  }

  return null;
};

export default Messages;
