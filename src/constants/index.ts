import { NavLink, Permalinks, Skill, SocialsData } from "./constants";

export const navLinks: NavLink[] = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];




export const skills: Skill[] = [
    {
        name: "HTML 5",
        icon: "/tech/html.png",
    },
    {
        name: "CSS 3",
        icon: "/tech/css.png",
    },
    {
        name: "JavaScript",
        icon: "/tech/javascript.png",
    },
    {
        name: "TypeScript",
        icon: "/tech/typescript.png",
    },
    {
        name: "React JS",
        icon: "/tech/reactjs.png",
    },
    {
        name: "Tailwind CSS",
        icon: "/tech/tailwind.png",
    },
    {
        name: "Node JS",
        icon: "/tech/nodejs.png",
    },
    {
        name: "MongoDB",
        icon: "/tech/mongodb.png",
    },
    {
        name: "Three JS",
        icon: "/tech/threejs.svg",
    },
    {
        name: "Git",
        icon: "/tech/git.png",
    },
    {
        name: "Docker",
        icon: "/tech/docker.png",
    },
    {
        name: "NestJS",
        icon: "/tech/nestjs.png",
    },
    {
        name: "NextJS",
        icon: "/tech/nextjs.png",
    },
    {
        name: "Python",
        icon: "/tech/python.png"
    }
]


export const projects = [
    // {
    //     name: "VeganizeIt",
    //     description:
    //         "Single-page web application for scanning barcodes and searching vegan-friendly products",
    //     tags: [
    //         {
    //             name: "react",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "mongodb",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "express",
    //             color: "blue-text-gradient",
    //         },
    //     ],
    //     image: "/images/projects/tavenli.png",
    //     source_code_link: "https://github.com/Daniel1231234/veganizeIt",
    //     demo_link: "https://veganizeit.onrender.com/home",
    // },
    {
        name: "BmyGuest",
        description:
            "A single-page, Full stack Web Application (SPA) inspired by Airbnb where users can view, book, and search for listings by location",
        tags: [
            {
                name: "vue",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: "/images/projects/bmyguest.png",
        source_code_link: "https://github.com/Daniel1231234/bmyguest_server",
        demo_link: "https://bmyguest-beta.vercel.app",
    },
    {
        name: "WhosApp",
        description:
            "A real time chat application that takes your conversations to the next level! Stay connected with your friends in real-time while enjoying the incredible features of ChatGPT. all within one user-friendly platform.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "Upstash",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: "/images/projects/whosapp.png",
        source_code_link: "https://github.com/Daniel1231234/whosapp-nextjs",
        demo_link: "https://whosapp-nextjs.vercel.app/",
    },
    {
        name: "Sophie-website",
        description:
            "A modern portfolio for a psychotherapist that offers a sleek and interactive user experience while presenting the therapist's services and qualifications in a clear and concise manner.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "MUI",
                color: "pink-text-gradient",
            },
        ],
        image: "/images/projects/therapist.png",
        source_code_link: "https://github.com/Daniel1231234/sophie-website",
        demo_link: "https://daniel1231234.github.io/sophie-website/",
    },
];


export const socialsData: SocialsData[] = [
    {
        href: "https://www.facebook.com/daniel.shechter.5/",
        Icon: "FaFacebookF",
    },
    {
        href: "https://github.com/Daniel1231234",
        Icon: "BsGithub",
    },
    {
        href: "https://www.linkedin.com/in/daniel-shalem-990429211/",
        Icon: "BsLinkedin",
    },
]



export const permalinks: Permalinks[] = [
    {
        href: '#home',
        title: 'Home'
    },
    {
        href: '#about',
        title: 'About'
    },
    {
        href: '#skills',
        title: 'Skills'
    },
    {
        href: '#projects',
        title: 'Projects'
    },
    {
        href: '#contact',
        title: 'Contact'
    },
]
