import { Icon } from "@/cmps/Icons";

interface SocialsData {
    href: string;
    Icon: Icon;
}

interface Permalinks {
    href: string
    title: string
}

export interface NavLink {
    id: string
    title: string
}

interface Services {
    title: string
    icon: string
}

interface Skill {
    name: string
    icon: string
}

interface Tag {
    name: string;
    color: string;
}

interface ProjectCardProps {
    index: number;
    name: string;
    description: string;
    tags: Tag[];
    image: string;
    source_code_link: string;
    demo_link?: string
}