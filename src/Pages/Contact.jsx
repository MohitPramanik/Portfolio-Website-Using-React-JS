import React, { useEffect, useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import Resume from "../Pdfs/Resume.pdf";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import linkButtons from "../Data-Files/LinkButtons";
import emailjs from "@emailjs/browser";
import NotificationMsg from "../components/NotificationMsg";

const Contact = () => {
    const [success, setSuccess] = useState(true);
    const [clicked, setClicked] = useState(0);

    const name = useRef(null);
    const email = useRef(null);
    const address = useRef(null);
    const message = useRef(null);

    function handleSubmit() {
        emailjs
            .sendForm("service_1snpyoi", "template_ulxptlc", "#contact-form", {
                publicKey: "kNFe0iWcz-n0QIeAo",
            })
            .then(
                () => {
                    setSuccess(true);
                },
                (error) => {
                    setSuccess(false);
                }
            );

        name.current.value = "";
        email.current.value = "";
        address.current.value = "";
        message.current.value = "";

        setClicked(clicked + 1);
    }

    gsap.registerPlugin(!clicked);

    useGSAP(() => {
        const elements = [
            "#form-heading",
            ".fill-box",
            "button",
            ".linkArea-element",
        ];

        elements.forEach((element) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    scrub: 4,
                    start: "-100 70%",
                    end: "-100 70%",
                    // markers: true,
                    scroller: "#app-component",
                    // once: true,
                },
            }).fromTo(
                element,
                {
                    x: 100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.1,
                }
            );
        });
    });

    return (
        <div
            id="contact"
            className="snap-start bg-slate-900 text-white min-h-screen w-screen flex justify-center items-center flex-col lg:flex-row relative"
        >
            {/* Message notification to say if sent successfully or not */}
            {clicked != 0 && (
                <NotificationMsg success={success} clicked={clicked} />
            )}

            {/* Contact-form */}
            <div
                id="formArea"
                className="h-max w-[90%] lg:w-1/2 pb-9 bg-blue-950 rounded-2xl overflow-hidden m-auto my-6"
            >
                <h2
                    id="form-heading"
                    className="text-center text-4xl font-bold p-6 bg-gradient-to-r from-black to-[#3d69eb] z-10"
                >
                    Contact Me
                </h2>
                <div className="flex justify-center items-center">
                    <form
                        id="contact-form"
                        className="flex flex-col gap-6 w-[90%] sm:w-5/6 p-5 text-black z-0 overflow-hidden"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <input
                            type="text"
                            className="p-2 rounded-md focus:outline-sky-600 focus:outline-4 fill-box"
                            placeholder="Enter your name"
                            name="from_name"
                            required
                            ref={name}
                        />
                        <input
                            type="email"
                            className="p-2 rounded-md focus:outline-sky-600 focus:outline-4 fill-box"
                            placeholder="Enter your email"
                            name="email"
                            required
                            ref={email}
                        />
                        <input
                            type="text"
                            className="p-2 rounded-md focus:outline-sky-600 focus:outline-4 fill-box"
                            placeholder="Enter your address"
                            name="address"
                            required
                            ref={address}
                        />
                        <textarea
                            cols="30"
                            rows="5"
                            className="resize-none p-2 rounded-md focus:outline-sky-600 focus:outline-4 fill-box"
                            placeholder="Enter your message"
                            name="message"
                            required
                            ref={message}
                        ></textarea>
                        <button className="bg-blue-600 p-3 rounded-md hover:bg-blue-700 font-bold text-white active:bg-emerald-600">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* Social-media link section */}
            <div
                id="linkArea"
                className="w-screen lg:w-[30%] xl:w-1/4 h-max lg:h-screen py-16 flex justify-center items-center bg-slate-800 flex-col text-center lg:text-start"
            >
                <div className="m-4 flex flex-col gap-6">
                    <div>
                        <p className="linkArea-element">Connect with me</p>
                        <p className="flex items-center gap-2 linkArea-element">
                            <MdEmail />
                            <button
                                onClick={() =>
                                    (window.location.href =
                                        "mailto:mohitpramanik548@gmail.com")
                                }
                            >
                                mohitpramanik548@gmail.com
                            </button>
                        </p>
                    </div>
                    <div className="flex gap-3 text-xl justify-center lg:justify-start">
                        {linkButtons.map((elem) => (
                            <a
                                key={elem.id}
                                href={elem.link}
                                target="_blank"
                                className="border-2 border-teal-600 rounded-full p-2 bg-teal-600 hover:animate-bounce linkArea-element"
                            >
                                {elem.element}
                            </a>
                        ))}
                    </div>
                </div>

                <a href={Resume} download>
                    <button className="resume-btn px-8 lg:px-6 py-3 m-3 lg:m-0 bg-pink-700 hover:bg-red-600 rounded-full w-max font-bold text-xl flex flex-nowrap gap-2 items-center active:bg-blue-500 linkArea-element">
                        Resume <FaDownload className="download-btn" />
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Contact;
