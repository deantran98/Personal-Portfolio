import {
    frontend,
    backend,
    uiux,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    siriusglobal,
    hscredit,
    northeastern,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: frontend,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "UI/UX Researcher",
        icon: uiux,
    },
];

const technologies = [
    {
        name: "HTML5",
        icon: html,
    },
    {
        name: "CSS3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "ReactJS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "NodeJS",
        icon: nodejs,
    },
    {
        name: "ThreeJS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    }
];

const experiences = [
    {
        title: "Teaching Assistant",
        company_name: "Northeastern University",
        icon: northeastern,
        iconBg: "#383E56",
        date: "January 2023 - May 2023",
        points: [
            "Collaborated with professor to design and implement lab sessions, debug pre-release assignments, and enhance student engagement, boosting a 40% improvement in overall course grade.",
            "Conducted weekly office hours to provide guidance and mentorship to 100+ students, resulting in a 90% increase in student satisfaction with course material.",
        ],
    },
    {
        title: "Web Developer Assistant",
        company_name: "Northeastern University",
        icon: northeastern,
        iconBg: "#E6DEDD",
        date: "October 2022 - May 2023",
        points: [
            "Collaborated with a senior software engineer to maintain and troubleshoot the Game Pattern Library website, successfully resolving compatibility issues caused by different frameworks.",
            "Contributed to the refactoring of the codebase by converting React-Redux classes to functional React Hooks, formulating more efficient and streamlined code.",
            "Utilized Jest framework to conducted thorough testing and quality assurance to ensure the website met high standards for functionality and user experience.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Hs.credit",
        icon: hscredit,
        iconBg: "#383E56",
        date: "May 2022 - September 2022",
        points: [
            "Designed and developed intuitive user interfaces, using HTML, CSS, and JavaScript to build out a fully functional account management and user wallet website, attaining a 20% increase in user engagement.",
            "Developed and executed a proof of concept for a data storage feature utilizing non-fungible tokens (NFTs) and blockchain technology using the Decentralized Storage Network (DSN) Arweave, resulting in a scalable and secure solution for data storage.",
            "Implemented and deployed websites on the Interplanetary File System (IPFS), leveraging an unstoppable domain to ensure maximum availability and decentralization, establishing a reliable and efficient system for hosting and accessing web content.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "SRIUS GLOBAL",
        icon: siriusglobal,
        iconBg: "#E6DEDD",
        date: "September 2021 - December 2021",
        points: [
            "Designed and implemented a user-friendly rating form using HTML, CSS, and JavaScript to capture clients feedback following each advisory session, resulting in a 25% increase in response rate.",
            "Developed a website that effectively displays the company Key Performance Indicators (KPIs) using a RESTful API, surpassing transparency and accountability for stakeholders.",
            "Closely collaborated with a senior software engineer on refactoring, optimizing data structures, and troubleshooting complex code issues to improve codebase quality and efficiency.",
        ],
    },
];

const projects = [
    {
        name: "Animation App",
        description:
            "An application that seamlessly translates motion of circle and rectangle shapes into dynamic animation views.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/deantran98/Animation-App",
    },
    {
        name: "Pyramid Solitaire Game",
        description:
            "A popular card game where the objective is to clear a pyramid of cards by pairing cards that have a total value of 13.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/deantran98/Pyramid-Solitaire-Game",
    },
    {
        name: "Convey Town",
        description:
            "A virtual meeting space where different groups of people can have simultaneous video calls, allowing participants to drift between different conversations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://spring-23-team107.netlify.app/",
    },
];

export { services, technologies, experiences, projects };