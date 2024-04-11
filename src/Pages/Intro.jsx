// Intro.jsx
import React from "react";
import AutoText from "../components/AutoText";
import Photo from "../Images/Photo.jpg";

const Intro = () => {
    return (
        <div
            id="intro"
            className="snap-start bg-slate-900 text-white h-screen w-screen flex justify-center items-center"
        >
            <div className="w-2/3 flex ps-8 justify-center items-center">
                <AutoText />
            </div>
            <div className="w-1/2 flex justify-center items-center ">
                <div className="h-[400px] w-[400px] border-4 border-blue-500 shape overflow-hidden shape">
                    <img
                        src={Photo}
                        alt="Error Loading Image"
                        className="h-[70vh] rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Intro;
