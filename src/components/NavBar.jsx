import React, { useEffect, useRef, useState } from "react";
import Photo from "../Images/College Buildings/dspmu.jpg";

function NavBar() {
    const navbar = useRef(null);

    const [hidden, setHidden] = useState(false);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setHidden(true);
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, [hidden]);

    return (
        <div
            id="navbar"
            className={`h-20 w-screen bg-black/50 backdrop-blur-sm absolute ${
                hidden ? "-top-[100%]" : "top-0"
            } z-10`}
            ref={navbar}
        >
            <nav className="h-full w-full flex justify-between">
                <div className="text-white h-full w-[20%] flex justify-start items-center">
                    <span className=" ms-10 border-2 h-[40px] w-[40px] border-white rounded-full overflow-hidden">
                        <img
                            src={Photo}
                            alt="logo"
                            className="h-full w-full object-cover"
                        />
                    </span>
                </div>

                <ul className="flex items-center justify-around h-full w-full text-white font-bold text-xl ">
                    <li>
                        <a href="#intro" className="">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#education" className="">
                            Education
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
