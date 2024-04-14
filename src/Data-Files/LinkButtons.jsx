import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const linkButtons = [
    {
        id: 1,
        link: "https://www.instagram.com/mohitpramanik_/?next=%2F",
        element: <AiFillInstagram />,
    },
    {
        id: 2,
        link: "https://twitter.com/MohitPramanik_",
        element: <FaXTwitter />,
    },
    {
        id: 3,
        link: "https://www.linkedin.com/in/mohit-kumar-pramanik-498808271/",
        element: <FaLinkedin />,
    },
    {
        id: 4,
        link: "https://github.com/MohitPramanik",
        element: <SiGithub />,
    },
];

export default linkButtons;
