import Navbar from "./components/Navbar.jsx";
import MainSection from "./components/MainSection.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  return (
    <div className="">
      <Navbar />
      <MainSection />
      <section id="AboutMe">
        <AboutMe />
      </section>
      <section id="Experience">
        <Experience />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
