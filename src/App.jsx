import React from "react";
import Intro from "./Pages/Intro";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className="snap-y snap-mandatory h-screen w-screen overflow-auto overflow-x-hidden scroll-smooth">
            {/* <NavBar /> */}
            <Intro />
            <Education />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
