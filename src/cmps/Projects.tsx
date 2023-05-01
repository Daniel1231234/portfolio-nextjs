import { projectsData } from "@/data/projects";
import Card from "./UI/Card";
import Image from "next/image";
import Button from "./UI/Button";
import ProjectItem from "./Project";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title"> My Recent Work </h2>
      <div className="container reveal grid gap-10 m-auto  items-stretch grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {projectsData.map((proj) => <ProjectItem proj={proj} key={proj.id} className="bg-card rounded-lg transition hover:border-[#4c4c9f] hover:bg-body hover:border hover:border-solid" />)}
      
      </div>
    </section>
  );
};

export default Projects;


