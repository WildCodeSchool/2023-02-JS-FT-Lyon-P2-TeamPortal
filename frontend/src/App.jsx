import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import Teams from "./pages/Teams";
import Library from "./pages/Library";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;
