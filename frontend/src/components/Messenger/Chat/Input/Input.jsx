import React, { useState } from "react";
import "./Input.css";

const Input = ({ setMessages, currentUser }) => {
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

      <button onClick={handleSendClick}>send</button>
    </div>
  );
};

export default Input;
