import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skill";
import Projects from "./sections/Project";

export default function App() {
  return (
    <>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
    </>
  );
}

