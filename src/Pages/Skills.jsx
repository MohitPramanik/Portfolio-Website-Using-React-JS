import React, { useEffect, useRef } from "react";
import C from "../Images/Programming Languages/c.png";
import Cpp from "../Images/Programming Languages/cpp.png";
import Html from "../Images/Programming Languages/html.png";
import Css from "../Images/Programming Languages/css.png";
import Js from "../Images/Programming Languages/js.png";
import ReactJs from "../Images/Programming Languages/react.png";
import MongoDB from "../Images/Programming Languages/mongodb.png";
import Python from "../Images/Programming Languages/python.png";
import Java from "../Images/Programming Languages/java.png";
import MySQL from "../Images/Programming Languages/mysql.png";
import NodeJs from "../Images/Programming Languages/nodeJs.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills = () => {
    const programmingLanguages = [
        C,
        Cpp,
        Html,
        Css,
        Js,
        ReactJs,
        MongoDB,
        Python,
        Java,
        MySQL,
        NodeJs,
    ];

    gsap.registerPlugin(ScrollTrigger, useGSAP);

    useGSAP(() => {
        gsap.from("#skills-heading", {
            y: -100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#skills",
                scrub: 4,
                start: "top 20%",
                end: "top top",
                // markers: true,
                scroller: "#app-component",
                // once: true,
            },
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: "#skills-heading",
                scrub: 4,
                start: "bottom 70%",
                end: "end 50%",
                // markers: true,
                scroller: "#app-component",
                // once: true,
            },
        }).from(" #scroll-info", {
            y: 100,
            opacity: 0,
        });
    });

    useEffect(() => {
        const scrollable = document.getElementById("scrollable");
        scrollable.addEventListener(
            "wheel",
            (e) => {
                if (e.wheelDelta > 0) {
                    scrollable.scrollLeft -= 50;
                } else {
                    scrollable.scrollLeft += 50;
                }
            },
            { passive: true }
        );
    }, []);

    return (
        <div
            id="skills"
            className="snap-start bg-slate-900 text-white h-screen w-screen flex flex-col lg:flex-row"
        >
            <div className="h-max lg:h-full text-center p-10 lg:p-0 w-screen lg:w-[20vw] bg-violet-700 flex justify-center items-center overflow-hidden ">
                <h2
                    id="skills-heading"
                    className="text-[11vw] sm:text-6xl font-bold"
                    style={{ fontFamily: "cursive" }}
                >
                    My Skills
                </h2>
            </div>

            <div className="h-full w-full lg:w-[80vw] flex justify-center items-center flex-col ">
                <div id="wrapper" className="w-[90%] h-max overflow-scroll">
                    <div
                        id="scrollable"
                        className="flex flex-nowrap gap-5 w-max px-4 pb-5"
                    >
                        {programmingLanguages.map((item, index) => (
                            <div key={index} className="h-[25vw]">
                                <img
                                    src={item}
                                    alt="Loading error"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    id="scroll-info"
                    className="text-md lg:text-xl text-center lg:mt-20 p-3"
                >
                    Scroll Here to move down
                </div>
            </div>
        </div>
    );
};

export default Skills;
