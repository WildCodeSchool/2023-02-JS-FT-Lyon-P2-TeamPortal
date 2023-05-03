import React, { useState } from "react";
import "./Users.css";
import usersList from "../assets/usersList";

function Users() {
  const [showNameStatus, setShowNameStatus] = useState(true);

  return (
    <ol className="Users">
      {usersList.map((user) => (
        <li key={user.uuid}>
          <img
            src={user.picture}
            alt="avatar.jpg"
            className="avatar"
            role="presentation"
            onClick={() => setShowNameStatus(!showNameStatus)}
          />
          <div
            className={`name-status-container ${
              showNameStatus ? "show" : "hide"
            }`}
          >
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
              <div className="status-online" />
            ) : (
              <div className="status-offline" />
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default Users;