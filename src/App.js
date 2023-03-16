import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./assets/components/navbar/Navbar";
import Home from "./assets/components/pages/home/Home";
import About from "./assets/components/pages/about/About";
import Work from "./assets/components/pages/work/Work";
import Contact from "./assets/components/pages/contact/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
