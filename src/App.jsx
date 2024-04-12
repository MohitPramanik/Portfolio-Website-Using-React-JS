import React, { useEffect, useRef, useState } from "react";
import Intro from "./Pages/Intro";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import NavBar from "./components/NavBar";

function App() {
    const appRef = useRef(null);
    const [isNavbarHidden, setIsNavbarHidden] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isActive, setIsActive] = useState(false);

    // to show and hide navbar on up scroll and down scroll respectively
    const handleScroll = () => {
        if (appRef.current.scrollTop > lastScrollTop) {
            !isActive && setIsNavbarHidden(true);
        } else if (appRef.current.scrollTop < lastScrollTop) {
            setIsNavbarHidden(false);
        }
        setLastScrollTop(appRef.current.scrollTop);
    };

    // to hide navbar if no activity for 4 seconds
    useEffect(() => {
        if (!isActive) {
            const interval = setTimeout(() => {
                setIsNavbarHidden(true);
                console.log("running");
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isActive, isNavbarHidden]);

    return (
        <div
            className="snap-y snap-mandatory h-screen w-screen overflow-auto overflow-x-hidden scroll-smooth"
            ref={appRef}
            onScroll={handleScroll}
        >
            <NavBar
                ishidden={isNavbarHidden}
                isActive={isActive}
                setIsActive={setIsActive}
            />
            <Intro />
            <Education />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
