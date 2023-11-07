import { NavLink, Permalinks, Skill, SocialsData } from "./constants"

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
]

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
    icon: "/tech/python.png",
  },
]

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
    href: "#home",
    title: "Home",
  },
  {
    href: "#about",
    title: "About",
  },
  {
    href: "#skills",
    title: "Skills",
  },
  {
    href: "#projects",
    title: "Projects",
  },
  {
    href: "#contact",
    title: "Contact",
  },
]

export const projectsData = [
  {
    id: 1,
    title: "BmyGuest",
    description:
      "A single-page, Full stack Web Application (SPA) inspired by Airbnb where users can view, book, and search for listings by location",
    image: "/images/projects/bmyguest.png",
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
    gitUrl: "https://github.com/Daniel1231234/bmyguest_server",
    previewUrl: "https://bmyguest-beta.vercel.app",
  },
  {
    id: 2,
    title: "WhosApp",
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
    gitUrl: "https://github.com/Daniel1231234/whosapp-nextjs",
    previewUrl: "https://whosapp-nextjs.vercel.app/",
  },
  {
    id: 3,
    title: "Politai-social",
    description:
      "A powerful and feature-rich political social media app. Provides a platform for users to engage in political discussions, share opinions, and connect with like-minded individuals.",
    image: "/images/projects/politai.png",
    tags: [
      {
        name: "nextjs",
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
    gitUrl: "https://github.com/Daniel1231234/politai",
    previewUrl: "https://politai.vercel.app/",
  },
]
