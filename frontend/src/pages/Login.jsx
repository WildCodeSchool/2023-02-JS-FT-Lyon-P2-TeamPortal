import React, { useState, useEffect } from "react";
import LoginBox from "../components/LoginBox/LoginBox";
import Loader from "../components/Loader/Loader";

export default function Login() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return loader ? (
    <Loader />
  ) : (
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
