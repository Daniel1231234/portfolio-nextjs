import { projectsData } from "@/data/projects";
import ProjectItem from "./Project";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title"> My Recent Work </h2>
      <div className="container reveal grid gap-10 m-auto  items-stretch grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {projectsData.map((proj) => <ProjectItem proj={proj} key={proj.id} className="bg-card flex flex-col justify-start w-full border transition-[all 400ms ease] max-w-[500px] min-h-[300px] h-[-webkit-fill-available] m-auto p-2 rounded-2xl border-solid border-transparent hover:rounded-primary hover:border  hover:rounded-2xl hover:border-[#4c4c9f] hover:border-solid hover:bg-body" />)}
      </div>
    </section>
  );
};

export default Projects;


