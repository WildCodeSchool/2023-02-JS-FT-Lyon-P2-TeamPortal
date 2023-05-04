import React, { useRef, useEffect } from "react";
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
  const lastMessageRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    if (lastMessageRef.current && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ol className="Messages" ref={containerRef}>
      {messages.map((message, index) => (
        <li
          key={message.authorId}
          ref={index === messages.length - 1 ? lastMessageRef : null}
        >
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
