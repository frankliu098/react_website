import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import About from "./components/about";
import Projects from "./components/projects";
import Classes from "./components/classes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/classes" element={<Classes />} />
          {/* <Route path="/footer" element={<Footer />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
