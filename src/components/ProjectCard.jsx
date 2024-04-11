import React from "react";

function ProjectCard({ project }) {
    return (
        <div className="h-max md:h-[480px] w-full sm:w-[400px] shadow hover:shadow-lg hover:shadow-blue-500 bg-black shadow-blue-500 rounded-lg sm:rounded-3xl flex flex-col items-center sm:justify-center overflow-hidden">
            <div className="image-section h-max sm:h-3/5 w-full flex justify-center items-center p-3 md:pt-0">
                <div className="h-full sm:h-5/6 border-2 border-violet-300 rounded-md sm:rounded-lg">
                    <img
                        src={project.projectImage}
                        alt="Error Loading Image"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="description-section h-1/2 w-full text-center p-6 ">
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
