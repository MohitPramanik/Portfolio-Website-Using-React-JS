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

    const scrollArea = useRef(null);
    const scrollBox = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const scrollLength =
            scrollArea.current.scrollWidth - scrollBox.current.offsetWidth;

        gsap.to(".scrollArea", {
            x: -scrollLength,
            duration: 6,
            scrollTrigger: {
                trigger: ".scrollArea",
                scroller: scrollBox.current,
                start: "center 30vw",
                end: "2000 top",
                scrub: 1,
                // markers: true,
            },
        });
    }, []);

    return (
        <div
            id="skills"
            className="snap-start bg-slate-900 text-white h-screen w-screen flex flex-col lg:flex-row"
        >
            <div className="h-max lg:h-full p-10 lg:p-0 w-screen lg:w-[20vw] bg-violet-700 flex justify-center items-center ">
                <h2
                    className="text-[11vw] sm:text-6xl font-bold"
                    style={{ fontFamily: "cursive" }}
                >
                    My Skills
                </h2>
            </div>
            <div className="h-full w-full lg:w-[80vw] flex justify-center items-center flex-col ">
                <div
                    className="h-80 w-[90%] lg:w-[80%] overflow-x-hidden right-scroller-section"
                    ref={scrollBox}
                >
                    <div className="h-[400vh] w-full ">
                        <div
                            className="flex flex-nowrap w-max h-max scrollArea sticky top-0 pe-4 "
                            ref={scrollArea}
                        >
                            {programmingLanguages.map((item, index) => (
                                <div
                                    className="h-[30vw] lg:h-[319px] w-auto"
                                    key={index}
                                >
                                    <img src={item} className="h-full mx-6" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-md lg:text-xl text-center lg:mt-20 p-3">
                    Scroll down over the above images to see the rest others
                </div>
            </div>
        </div>
    );
};

export default Skills;
