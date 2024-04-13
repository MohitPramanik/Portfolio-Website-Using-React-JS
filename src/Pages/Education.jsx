import React, { useEffect, useRef, useState } from "react";
import EducationCards from "../components/EducationCards";
import colleges from "../Data-Files/Colleges";
import { Reveal } from "react-awesome-reveal";
import customAnimation from "../components/CustomAnimation";

const Education = () => {
    return (
        <div
            id="education"
            className="snap-start bg-slate-900 text-white min-h-screen w-screen flex flex-col"
        >
            <h2
                id="education-heading"
                className="text-white text-center sm:text-start text-[11vw] sm:text-6xl h-max p-8 sm:pt-[63px] border-b-[1px] border-blue-300 sm:border-0"
            >
                <Reveal triggerOnce={true} duration={1000}>
                    My Education
                </Reveal>
            </h2>
            <div className="flex justify-center items-center gap-10 h-full flex-wrap p-7">
                {colleges.map((college) => (
                    <Reveal
                        keyframes={customAnimation}
                        direction="up"
                        duration={2000}
                        delay={1000}
                        triggerOnce={true}
                        cascade={true}
                        damping={1}
                        key={college.id}
                    >
                        <EducationCards college={college} />
                    </Reveal>
                ))}
            </div>
        </div>
    );
};

export default Education;
