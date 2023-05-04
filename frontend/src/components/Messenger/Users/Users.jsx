import React from "react";
import "./Users.css";
import usersList from "../assets/usersList";

function Users() {
  return (
    <ol className="Users">
      {usersList.map((user) => (
        <li key={user.uuid}>
          <img
            src={user.picture}
            alt="avatar.jpg"
            className="avatar"
            role="presentation"
          />
          <div className="name-status-container">
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
