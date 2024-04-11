import React from "react";

function ProjectCard({ project }) {
    return (
        <div className="h-[480px] w-[400px] shadow hover:shadow-lg hover:shadow-blue-500 bg-black shadow-blue-500 rounded-3xl flex flex-col items-center justify-center overflow-hidden">
            <div className="image-section h-1/2 w-full flex justify-center items-center">
                <div className="h-3/4 border-2 border-violet-300 rounded-lg">
                    <img
                        src={project.projectImage}
                        alt="Error Loading Image"
                        className="w-full h-full bg-cover"
                    />
                </div>
            </div>
            <div className="description-section h-1/2 w-full  text-center px-6 ">
                <h3 className="font-bold text-xl">{project.projectName}</h3>
                <p className="m-3">{project.projectDescription}</p>
                <p className="text-sky-600 font-bold pt-3">
                    <a href={project.projectLink} target="_blank">
                        Check it out
                    </a>
                </p>
            </div>
        </div>
    );
}

export default ProjectCard;
