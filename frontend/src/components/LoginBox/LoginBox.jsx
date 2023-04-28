import React from "react";
import "./LoginBox.css";

function LoginBox() {
  return (
    <div>
      <div className="loginbox-container">
        <div className="loginbox-title">
          <h2>LOGIN</h2>
        </div>
        <div className="form-container">
          <form className="login-form">
            <label>
              <p>Username</p>
              <input type="text" className="input" />
            </label>
            <label>
              <p>Password</p>
              <input type="password" className="input" />
            </label>
            <div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
