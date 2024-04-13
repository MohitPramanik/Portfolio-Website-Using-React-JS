import React, { useRef } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import Resume from "../Pdfs/Resume.pdf";
import customAnimation from "../components/CustomAnimation";
import Fade, { Slide } from "react-awesome-reveal";

const Contact = () => {
    const name = useRef(null);
    const email = useRef(null);
    const address = useRef(null);
    const message = useRef(null);

    function handleSubmit() {
        console.log(name.current.value);
        console.log(email.current.value);
        console.log(address.current.value);
        console.log(message.current.value);

        name.current.value = "";
        email.current.value = "";
        address.current.value = "";
        message.current.value = "";
    }

    return (
        <div
            id="contact"
            className="snap-start bg-slate-900 text-white min-h-screen w-screen flex justify-center items-center flex-col lg:flex-row"
        >
            {/* Contact-form */}
            <div className="h-max w-[90%] lg:w-1/2 pb-9 bg-blue-950 rounded-2xl overflow-hidden m-auto my-6">
                <h2 className="text-center text-4xl font-bold p-6 bg-gradient-to-r from-black to-[#3d69eb] z-10">
                    <Fade keyframes={customAnimation} triggerOnce={true}>
                        Contact Me
                    </Fade>
                </h2>
                <Slide direction="up" triggerOnce={true}>
                    <div className="flex justify-center items-center">
                        <form
                            action=""
                            className="flex flex-col gap-6 w-[90%] sm:w-5/6 p-5 text-black z-0 overflow-hidden"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }}
                        >
                            <input
                                type="text"
                                className="p-2 rounded-md focus:outline-sky-600 focus:outline-4"
                                placeholder="Enter your name"
                                ref={name}
                            />
                            <input
                                type="email"
                                className="p-2 rounded-md focus:outline-sky-600 focus:outline-4"
                                placeholder="Enter your email"
                                ref={email}
                            />
                            <input
                                type="text"
                                className="p-2 rounded-md focus:outline-sky-600 focus:outline-4"
                                placeholder="Enter your address"
                                ref={address}
                            />
                            <textarea
                                cols="30"
                                rows="5"
                                className="resize-none p-2 rounded-md focus:outline-sky-600 focus:outline-4"
                                placeholder="Enter your message"
                                ref={message}
                            ></textarea>
                            <button className="bg-blue-600 p-3 rounded-md hover:bg-blue-700 font-bold text-white active:bg-emerald-600">
                                Submit
                            </button>
                        </form>
                    </div>
                </Slide>
            </div>

            {/* Social-media link section */}
            <div className="w-screen lg:w-[30%] xl:w-1/4 h-max lg:h-screen py-9 flex justify-center items-center bg-slate-800 flex-col text-center lg:text-start">
                <Fade keyframes={customAnimation} triggerOnce={true}>
                    <div className="m-4 flex flex-col gap-6">
                        <div>
                            <p>Connect with me</p>
                            <p className="flex items-center gap-2">
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
                            <a
                                href="https://www.instagram.com/mohitpramanik_/?next=%2F"
                                target="_blank"
                                className="border-2 border-teal-600 rounded-full p-2 bg-teal-600 hover:animate-bounce"
                            >
                                <AiFillInstagram />
                            </a>
                            <a
                                href="https://twitter.com/MohitPramanik_"
                                target="_blank"
                                className="border-2 border-teal-600 rounded-full p-2 bg-teal-600 hover:animate-bounce"
                            >
                                <FaXTwitter />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mohit-kumar-pramanik-498808271/"
                                target="_blank"
                                className="border-2 border-teal-600 rounded-full p-2 bg-teal-600 hover:animate-bounce"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com/MohitPramanik"
                                target="_blank"
                                className="border-2 border-teal-600 rounded-full p-2 bg-teal-600 hover:animate-bounce"
                            >
                                <SiGithub />
                            </a>
                        </div>
                    </div>

                    <a href={Resume} download>
                        <button className="resume-btn px-8 lg:px-6 py-3 m-3 lg:m-0 bg-pink-700 hover:bg-red-600 rounded-full w-max font-bold text-xl flex flex-nowrap gap-2 items-center active:bg-blue-500">
                            Resume <FaDownload className="download-btn" />
                        </button>
                    </a>
                </Fade>
            </div>
        </div>
    );
};

export default Contact;
