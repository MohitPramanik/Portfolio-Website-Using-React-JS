import React, { useRef, useState } from "react";
import Photo from "../Images/College Buildings/dspmu.jpg";
import { Divide as Hamburger } from "hamburger-react";

function NavBar({ ishidden, isActive, setIsActive }) {
    const navbar = useRef(null);

    // useEffect(() => {
    //     if (isActive) {
    //         console.log("Active");
    //     } else {
    //         console.log("NOt active");
    //     }
    // }, [isActive]);

    return (
        <div
            id="navbar"
            className={`h-max md:h-20 w-screen bg-black/50 fixed
            ${!ishidden ? "top-0" : "-top-20 "}
             z-10`}
        >
            <nav className="h-full w-full flex justify-between flex-col md:flex-row relative">
                <div className="text-white h-full py-4 w-full md:w-[20%] flex justify-between items-center z-30 backdrop-blur-sm">
                    <span className=" ms-10 border-2 h-[40px] w-[40px] border-white rounded-full overflow-hidden">
                        <img
                            src={Photo}
                            alt="logo"
                            className="h-full w-full object-cover"
                        />
                    </span>
                    <span
                        className="md:hidden me-7 text-3xl"
                        onClick={() => setIsActive(!isActive)}
                    >
                        <Hamburger />
                    </span>
                </div>

                <ul
                    className={`flex md:items-center justify-around h-max md:h-full w-full text-white bg-black/50 md:bg-transparent  font-bold text-xl flex-col md:flex-row text-center absolute md:static z-20  transition-all ease-in-out duration-[1s]  backdrop-blur-sm ${
                        isActive
                            ? "top-20 opacity-100 "
                            : "-top-52 opacity-0 md:opacity-100 "
                    }`}
                >
                    <li className="border-t-2 border-[#e5e5e533] md:border-0  sm:text-[3vw] text-[17px] font-[600] sm:font-bold md:text-[22px] relative">
                        <a href="#intro" className="">
                            Home
                        </a>
                    </li>
                    <li className="border-t-2 border-[#e5e5e533] md:border-0 md:bg-transparent sm:text-[3vw] text-[17px] font-[600] sm:font-bold md:text-[22px]">
                        <a href="#education" className="">
                            Education
                        </a>
                    </li>
                    <li className="border-t-2 border-[#e5e5e533] md:border-0 md:bg-transparent sm:text-[3vw] text-[17px] font-[600] sm:font-bold md:text-[22px]">
                        <a href="#skills" className="">
                            Skills
                        </a>
                    </li>
                    <li className="border-t-2 border-[#e5e5e533] md:border-0 md:bg-transparent sm:text-[3vw] text-[17px] font-[600] sm:font-bold md:text-[22px]">
                        <a href="#projects" className="">
                            Projects
                        </a>
                    </li>
                    <li className="border-t-2 border-[#e5e5e533] md:border-0 md:bg-transparent sm:text-[3vw] text-[17px] font-[600] sm:font-bold md:text-[22px]">
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
