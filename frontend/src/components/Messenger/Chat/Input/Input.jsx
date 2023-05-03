import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Input.css";

function Input({ setMessages, currentUser }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendClick = () => {
    const timestamp = new Date().toISOString();
    setMessages((messages) => [
      ...messages,
      { content: inputValue, timestamp, authorId: currentUser.uuid },
    ]);
    setInputValue("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendClick();
    }
  };

  return (
    <div className="Input">
      <input
        type="text"
        placeholder="message..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />

      <button type="submit" onClick={handleSendClick}>
        send
      </button>
    </div>
  );
}

Input.propTypes = {
  setMessages: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default Input;
