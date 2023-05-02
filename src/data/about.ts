import { Icon } from "@/cmps/Icons";

interface AboutData {
    title: string
    desc: string
    Icon: Icon
}


export const aboutData: AboutData[] = [
    {
        title: "Full-stack Web Developer",
        desc: `Hey there! My name is Daniel Shalem and I'm a full-stack web
        developer. I love a good challenge and I've had the opportunity to
        work with some of the latest and greatest web technologies
        including Node.js, React.js, Vue.js, Nest.js, Express.js and
        MongoDB.`,
        Icon: "FaLaptopCode",
    },
    {
        title: "Passionate Team Player",
        desc: `As a team player, I'm always eager to learn and grow. I'm a
        self-learner at heart and passionate about all things technology.
        I pride myself on adapting quickly to new environments, and I
        bring a unique perspective to every project I work on.`,
        Icon: "FaUsers",
    },
    {
        title: "Education & Experience",
        desc: `I completed an intensive coding bootcamp at Coding Academy, where
        I gained over 640 hours of experience in full-stack development.
        Additionally, I hold a Bachelor's degree in Social Work and a
        Master's degree in International Relations from Haifa University.
        I'm excited to connect with you and share my knowledge and
        experience. Let's build something great together!`,
        Icon: "FaGraduationCap",
    },
];