import React, { useEffect } from "react";
import EducationCards from "../components/EducationCards";
import colleges from "../Data-Files/Colleges";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Education = () => {
    gsap.registerPlugin(ScrollTrigger);

    return (
        <div
            id="education"
            className="snap-start bg-slate-900 text-white min-h-screen w-screen flex flex-col"
        >
            <h2
                id="education-heading"
                className="text-white text-center sm:text-start text-[11vw] sm:text-6xl h-max p-8 sm:pt-[63px] border-b-[1px] border-blue-300 sm:border-0"
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
