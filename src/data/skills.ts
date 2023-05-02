interface SkillData {
    id: number
    title: string
    items: string[]
}

export const skillsData: SkillData[] = [
    {
        id: 1,
        title: "Programming Languages",
        items: ["JavaScript", "TypeScript", "Node.js", "Python"],
    },
    {
        id: 2,
        title: "Frameworks",
        items: ["React.js", "Next.js", "Vue.js", "Nest.js", "Tailwind.css"],
    },
];