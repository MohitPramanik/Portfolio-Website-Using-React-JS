import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function EducationCards({ college }) {
    useGSAP(() => {
        const cards = gsap.utils.toArray(".card");
        cards.forEach((card) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    scrub: 4,
                    start: "-100 70%",
                    end: "-100 70%",
                    // markers: true,
                    scroller: "#app-component",
                    // once: true,
                },
            }).fromTo(
                card,
                {
                    y: 100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                }
            );
        });
    });

    return (
        <div
            className={`flex flex-col border border-white overflow-hidden h-[66vw] sm:h-[490px] w-full sm:w-[440px] rounded-md sm:rounded-2xl relative card`}
        >
            <div className="h-full w-full">
                <img
                    src={college.image}
                    alt={college.altText}
                    className="h-full w-full hover:scale-[1.2] ease-in-out transition-all duration-700"
                />
            </div>
            <div className="absolute -bottom-full pointer-events-none bg-black bg-opacity-65 text-white px-3 sm:px-4 py-5 sm:py-8 card-text ease-in-out transition-all duration-500 w-full text-sm sm:text-md">
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
