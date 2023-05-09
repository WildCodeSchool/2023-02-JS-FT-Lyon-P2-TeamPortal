import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import UserContext from "../../contexts/UserContext";
import "react-toastify/dist/ReactToastify.css";
import "./LoginBox.css";

function LoginBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = React.useContext(UserContext);

  const notifySuccess = () =>
    toast.success("Welcome to TeamPortal", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = () =>
    toast.error("Invalid email or password", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const userList = [
      { email: "marco@teamportal.com", password: "pass123!" },
      { email: "aurelie@teamportal.com", password: "pass123!" },
      { email: "pierre@teamportal.com", password: "pass123!" },
      { email: "teodor@teamportal.com", password: "pass123!" },
      { email: "guest@teamportal.com", password: "pass123!" },
    ];
    const user = userList.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      notifySuccess();
      navigate("/home");
      setUser(user);
    } else {
      notifyError();
    }
  };

  return (
    <div>
      <div className="loginbox-container">
        <div className="loginbox-title">
          <h2>Connexion</h2>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="login-form">
            <label>
              <p>Email</p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="input"
              />
            </label>
            <label>
              <p>Mot de Passe</p>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="input-login"
              />
            </label>
            <div>
              <button type="submit" className="submit-btn">
                Se Connecter
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
}

export default LoginBox;
