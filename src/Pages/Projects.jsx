import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectList from "../Data-Files/ProjectList";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Projects = () => {
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        gsap.from("#project-heading", {
            x: -100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#projects",
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
            id="projects"
            className="snap-start bg-slate-900 text-white h-screen w-screen flex flex-col items-center overflow-hidden"
        >
            <h2
                id="project-heading"
                className="text-center sm:text-start text-[11vw] sm:text-6xl p-8 sm:pt-[63px] border-b-[1px] border-blue-300 sm:border-0 w-full"
            >
                Some of my Projects
            </h2>
            <div
                id="project-scroller"
                className="h-full w-full overflow-auto p-9"
            >
                <div className="projects w-full h-max flex justify-center gap-10 items-center flex-wrap">
                    {projectList.map((project) => (
                        <ProjectCard
                            key={project.projectId}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
