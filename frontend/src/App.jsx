import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Library from "./pages/Library";
import Login from "./pages/Login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/library" element={<Library />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
