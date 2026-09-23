import Navbar from "./components/Navbar.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skill.jsx";
import Projects from "./sections/Project.jsx";
import Achievements from "./sections/Achievement.jsx";

export default function App() {
  return (
    <>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Achievements />
    </>
  );
}

