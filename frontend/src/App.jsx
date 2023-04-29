import { Route, Routes } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Library from "./pages/Library";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";

import "./App.css";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div className="App">
      <Header />
      <Navbar />
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
