import { Route, Routes } from "react-router-dom";
import React, { useState, useMemo } from "react";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Library from "./pages/Library";
import Login from "./pages/Login";
import UserContext from "./contexts/UserContext";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const memoizedUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
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
