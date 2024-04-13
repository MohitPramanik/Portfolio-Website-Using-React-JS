import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { InView } from "react-intersection-observer";

function Reveal({ children }) {
    const ref = useRef(null);

    const [isVisited, setIsVisited] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            ref.current,
            { y: 100, opacity: -1 },
            {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: "power1",
            }
        );
    }, [isVisited]);

    return (
        <div className="h-fit w-fit" ref={ref}>
            <InView
                as="div"
                onChange={(inView, entry) => setIsVisited(!isVisited)}
            >
                {children}
            </InView>
        </div>
    );
}

export default Reveal;
