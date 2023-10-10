import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MainSection from "./components/MainSection.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="space-y-4">
      <Navbar />
      <MainSection />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
