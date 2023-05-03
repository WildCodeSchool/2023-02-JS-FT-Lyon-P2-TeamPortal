import React from "react";
import LoginBox from "../components/LoginBox/LoginBox";

export default function Login() {
  return (
    <>
      <header className="login-header">
        <h1>
          Team<span id="header-title">Portal</span>
        </h1>
      </header>
      <div className="login-container">
        <div className="login-box">
          <LoginBox />
        </div>
      </div>
    </>
  );
}
