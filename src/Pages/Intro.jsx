// Intro.jsx
import React from "react";
import AutoText from "../components/AutoText";
import Photo from "../Images/Photo.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Intro = () => {
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            "#intro-text, #my-img",
            { y: 100, opacity: -1 },
            {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: "power1",
            }
        );
    });

    return (
        <div
            id="intro"
            className="snap-start bg-slate-900 text-white h-screen w-screen flex justify-center items-center flex-col lg:flex-row gap-[3vh] lg:gap-0"
        >
            <div
                id="intro-text"
                className="w-full lg:w-5/6 flex lg:ps-8 justify-center flex-col lg:items-start items-center order-1 text-[5vw] "
            >
                <p>Hello there, </p>
                <div>
                    I am <AutoText />
                </div>
            </div>
            <div className="w-[60%] lg:w-1/2 h-max lg:h-full flex justify-center items-center lg:order-2">
                <div
                    id="my-img"
                    className="w-[57vw] h-[57vw] md:h-[400px] md:w-[400px] border-4 border-blue-500 shape overflow-hidden shape transition-all"
                >
                    <img
                        src={Photo}
                        alt="Error Loading Image"
                        className="h-full w-full object-cover rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Intro;
