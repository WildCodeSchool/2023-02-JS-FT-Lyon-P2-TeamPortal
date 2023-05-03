import { Route, Routes } from "react-router-dom";
import React, { useState, useMemo, useEffect } from "react";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Library from "./pages/Library";
import Login from "./pages/Login";
import UserContext from "./contexts/UserContext";

import "./App.css";
import Loader from "./components/Loader/Loader";

function App() {
  const [loader, setLoader] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 8000);
  // }, []);

  const [user, setUser] = useState(null);
  const memoizedUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 15000);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div className="App">
      <UserContext.Provider value={memoizedUser}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/library" element={<Library />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
