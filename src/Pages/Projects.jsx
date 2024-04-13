import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectList from "../Data-Files/ProjectList";
import Reveal, { Fade } from "react-awesome-reveal";

const Projects = () => {
    return (
        <div
            id="projects"
            className="snap-start bg-slate-900 text-white h-screen w-screen flex flex-col items-center"
        >
            <h2 className="text-center sm:text-start text-[11vw] sm:text-6xl p-8 sm:pt-[63px] border-b-[1px] border-blue-300 sm:border-0 w-full">
                <Reveal duration={1000} triggerOnce={true}>
                    Some of my Projects
                </Reveal>
            </h2>
            <div className="h-full w-full overflow-auto p-9">
                <div className="projects w-full h-max flex justify-center gap-10 items-center flex-wrap">
                    {projectList.map((project, index) => (
                        <Fade duration={2000} key={project.projectId}>
                            <ProjectCard project={project} />
                        </Fade>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
