import { useEffect, useRef, useState, React } from "react";
import { TypeAnimation } from "react-type-animation";

const AutoText = () => {
    const animationRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsVisible(entry.isIntersecting);
            });
        });

        if (animationRef.current) {
            observer.observe(animationRef.current);
        }

        return () => {
            if (animationRef.current) {
                observer.unobserve(animationRef.current);
            }
        };
    }, []);

    return (
        <div ref={animationRef}>
            {isVisible && (
                <TypeAnimation
                    sequence={[
                        "Hello there, ",
                        1000,
                        "I am Mohit",
                        1000,
                        "I am a Frontend Developer",
                        1000,
                        "I am a Web Developer",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: "5vw", display: "inline-block" }}
                    repeat={Infinity}
                />
            )}
        </div>
    );
};

export default AutoText;
