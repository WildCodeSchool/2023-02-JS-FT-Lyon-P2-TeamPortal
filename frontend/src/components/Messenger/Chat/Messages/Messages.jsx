import React from "react";
import PropTypes from "prop-types";
import "./Messages.css";
import usersList from "../../assets/usersList";
import Message from "./Message/Message";

const getUserById = (id) => {
  for (const user of usersList) {
    if (user.uuid === id) return user;
  }
  return null;
};

function Messages({ messages }) {
  return (
    <ol className="Messages">
      {messages.map((message) => (
        <li key={message.authorId}>
          <Message user={getUserById(message.authorId)} message={message} />
        </li>
      ))}
    </ol>
  );
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      authorId: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Messages;
