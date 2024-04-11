import React from "react";
import ProjectCard from "../components/ProjectCard";
import Dspmu from "../Images/Project Images/Dspmu.png";
import EKalyan from "../Images/Project Images/E-kalyan.png";
import Calculator from "../Images/Project Images/Calculator.jpg";
import RandomJokeGenerator from "../Images/Project Images/Random-joke-generator.png";
import TicTacToeGame from "../Images/Project Images/Tic-tac-toe-Game.png";
import ToDoListApp from "../Images/Project Images/To-do-list-app.jpg";

const Projects = () => {
    const projectList = [
        {
            projectId: 1,
            projectName: "To-do-List Website",
            projectDescription:
                "Created Using React Js and TailWind CSS. In this web application, you can easily add and remove your todo tasks. Just Write the todo task and hit enter or click on Add Button and remove tasks by clicking on Delete button",
            projectLink: "https://mohitpramanik.github.io/To-do-list-App/",
            projectImage: ToDoListApp,
        },
        {
            projectId: 2,
            projectName: "Clone of E-Kalyan Website",
            projectDescription:
                "Created using HTML, CSS and JavaScript. It contains only the frontend part of the website. I didn't hosted it due to copyright issues. But you can check it on my linked in post whose link I have provided here.",
            projectLink:
                "https://www.linkedin.com/posts/mohit-kumar-pramanik-498808271_website-project-activity-7120797165358043137-81zj/?utm_source=share&utm_medium=member_desktop",
            projectImage: EKalyan,
        },
        {
            projectId: 3,
            projectName: "Tic-Tac-Toe Game",
            projectDescription:
                "Created using HTML, CSS and JavaScript. Responsiveness is handled in a good way. And you will really enjoy while using this.",
            projectLink:
                "https://mohitpramanik.github.io/Tic-tac-toe-game-website/",
            projectImage: TicTacToeGame,
        },
        {
            projectId: 4,
            projectName: "A Simple Calculator",
            projectDescription:
                "Created using HTML, CSS and JavaScript. It is fully responsive and it shows the real time result. All the functionalities are well handled in it.",
            projectLink: "https://mohitpramanik.github.io/Calculator/",
            projectImage: Calculator,
        },
        {
            projectId: 5,
            projectName: "Clone of Dspmu Website",
            projectDescription:
                "Created using HTML, CSS and JavaScript. It contains only the frontend part of the website. I didn't hosted it again due to copyright issues. But you can check it on my linked in post whose link I have provided here.",
            projectLink:
                "https://www.linkedin.com/posts/mohit-kumar-pramanik-498808271_website-project-activity-7120783427456389121-92F1/?utm_source=share&utm_medium=member_desktop",
            projectImage: Dspmu,
        },
        {
            projectId: 6,
            projectName: "Random Joke Generator",
            projectDescription:
                "Created Using HTML, CSS and JavaScript. It generated random jokes and you might find them funny.",
            projectLink:
                "https://mohitpramanik.github.io/Random-joke-generator/",
            projectImage: RandomJokeGenerator,
        },
    ];

    return (
        <div
            id="projects"
            className="snap-start bg-slate-900 text-white h-screen w-screen flex flex-col items-center"
        >
            <h2 className="text-6xl p-9">Some of my Projects</h2>
            <div className="h-full w-full overflow-auto p-9">
                <div className="projects w-full h-max flex justify-center gap-10 items-center flex-wrap">
                    {projectList.map((project, index) => (
                        <ProjectCard
                            project={project}
                            key={project.projectId}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
