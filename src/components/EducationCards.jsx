import React from "react";
import Dspmu from "../Images/College Buildings/dspmu.jpg";

function EducationCards({ college }) {
    return (
        <div className="flex flex-col border border-white overflow-hidden h-[490px] w-[440px] rounded-2xl relative card">
            <div className="h-full w-full">
                <img
                    src={college.image}
                    alt={college.altText}
                    className="h-full w-full hover:scale-[1.2] ease-in-out transition-all duration-700"
                />
            </div>
            <div className="absolute -bottom-full pointer-events-none bg-black bg-opacity-65 text-white px-4 py-8 card-text ease-in-out transition-all duration-500 w-full">
                <p>
                    <b>College : </b> {college.name}
                </p>
                <p>
                    {college.batch ? (
                        <>
                            <b>Batch: </b> {college.batch}
                        </>
                    ) : (
                        <>
                            <b>Passing Year: </b> {college.passingYear}
                        </>
                    )}
                </p>
                <p>
                    <b>Marks : </b> {college.marks}
                </p>
            </div>
        </div>
    );
}

export default EducationCards;
