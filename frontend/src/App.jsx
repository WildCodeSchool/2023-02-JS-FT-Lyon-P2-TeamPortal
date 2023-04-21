import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home.jsx';
import Teams from './pages/Teams.jsx';
import Library from './pages/Library.jsx';
import Login from './pages/Login.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Header from './components/Header/Header';
import './App.css';


function App() {
  return (
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
