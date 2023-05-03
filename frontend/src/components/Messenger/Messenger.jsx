import React from "react";
import "./Messenger.css";
import Users from "./Users/Users.jsx";
import Chat from "./Chat/Chat.jsx";

const Messenger = () => {
  return (
    <div className="Messenger">
      <Users />
      <Chat />
    </div>
  );
};

export default Messenger;
