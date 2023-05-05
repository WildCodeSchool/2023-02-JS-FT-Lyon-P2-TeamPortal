import React, { useEffect, useState } from "react";
import "./Chat.css";
import Messages from "./Messages/Messages";
import Input from "./Input/Input";
import usersList from "../assets/usersList";

let firstTime = true;

function Chat() {
  const [messages, setMessages] = useState([]);
  const [currentUser] = useState(usersList[13]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages"));
    if (storedMessages) {
      setMessages(storedMessages);
    }
  }, []);

  useEffect(() => {
    if (!firstTime) localStorage.setItem("messages", JSON.stringify(messages));
    else firstTime = !firstTime;
  }, [messages]);

  return (
    <div className="Chat">
      <Messages messages={messages} />
      <Input setMessages={setMessages} currentUser={currentUser} />
    </div>
  );
}

export default Chat;
