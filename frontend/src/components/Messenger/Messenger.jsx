import React from "react";
import "./Messenger.css";
import Users from "./Users/Users";
import Chat from "./Chat/Chat";

function Messenger() {
  return (
    <div className="Messenger">
      <Users />
      <Chat />
    </div>
  );
}

export default Messenger;
