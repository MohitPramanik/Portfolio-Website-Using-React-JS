import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function NotificationMsg({ success, clicked }) {
    useGSAP(() => {
        let tl = gsap.timeline();

        tl.to("#notification", {
            opacity: 1,
            x: -50,
            duration: 0.5,
        })
            .from(".progress", {
                width: 0,
                duration: 3,
                delay: 0.6,
            })
            .to("#notification", {
                x: 300,
                duration: 0.5,
                delay: 1,
                opacity: 0,
            });
    }, [clicked]);

    return (
        <div
            id="notification"
            className="h-20 w-[300px] border-2 bg-white text-black absolute top-4 -right-3 flex flex-col rounded-md z-20 opacity-0"
        >
            <div className="h-full w-full  flex items-center justify-center">
                {success ? (
                    <FaRegCheckCircle className="text-green-600 font-bold text-xl me-2" />
                ) : (
                    <MdError className="text-red-500 font-bold text-xl me-2" />
                )}
                <p>
                    {success
                        ? "Message successfully sent."
                        : "Error sending message"}
                </p>
            </div>
            <div className={`h-2 w-full bg-slate-300 absolute bottom-0`}>
                <div
                    className={`progress h-full w-full ${
                        success ? "bg-green-500" : "bg-red-500"
                    }`}
                ></div>
            </div>
        </div>
    );
}

export default NotificationMsg;
