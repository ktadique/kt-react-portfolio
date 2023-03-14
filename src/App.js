import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./assets/components/navbar/Navbar";
import Home from "./assets/components/pages/home/Home";
import Projects from "./assets/components/pages/projects/Projects";
import Contact from "./assets/components/pages/contact/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
