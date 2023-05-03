import React, { useEffect, useState } from "react";
import "./Chat.css";
import Messages from "./Messages/Messages.jsx";
import Input from "./Input/Input.jsx";
import usersList from "../assets/usersList.js";

let firstTime = true;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [currentUser] = useState(usersList[5]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages"));
    if (storedMessages) {
      setMessages(storedMessages);
    }
  }, []);

  useEffect(() => {
    if(!firstTime) localStorage.setItem("messages", JSON.stringify(messages));
    else firstTime=!firstTime
  }, [messages]);

  return (
    <div className="Chat">
      <Messages messages={messages} />
      <Input setMessages={setMessages} currentUser={currentUser} />
    </div>
  );
};

export default Chat;
