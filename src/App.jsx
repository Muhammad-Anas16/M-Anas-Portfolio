import "./App.css";
import { Button } from "./components/ui/button";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[linear-gradient(90deg,_rgba(18,29,30,1)_0%,_rgba(0,0,0,1)_50%,_rgba(23,18,27,1)_100%)] text-white">
      <Navbar />
      <div id="Hero">
        <Hero />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Skill">
        <Skill />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Education">
        <Education />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
