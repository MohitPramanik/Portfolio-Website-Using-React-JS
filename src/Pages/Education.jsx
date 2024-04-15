import React from "react";
import EducationCards from "../components/EducationCards";
import colleges from "../Data-Files/Colleges";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Education = () => {
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        gsap.from("#education-heading", {
            x: 100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#education",
                scrub: 4,
                start: "top 70%",
                end: "top top",
                // markers: true,
                scroller: "#app-component",
                // once: true,
            },
        });
    });

    return (
        <div
            id="education"
            className="snap-start bg-slate-900 text-white min-h-screen w-screen flex flex-col overflow-hidden pb-20 md:pb-0"
        >
            <h2
                id="education-heading"
                className="text-white text-center sm:text-start text-[11vw] sm:text-6xl h-max p-8 sm:pt-[63px] border-b-[1px] border-blue-300 sm:border-0 "
            >
                My Education
            </h2>
            <div className="flex justify-center items-center gap-10 h-full flex-wrap p-7">
                {colleges.map((college) => (
                    <EducationCards key={college.id} college={college} />
                ))}
            </div>
        </div>
    );
};

export default Education;
