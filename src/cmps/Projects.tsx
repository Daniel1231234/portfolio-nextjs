"use client"

import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "../hoc"
import { projectsData } from "../constants"
import { fadeIn, textVariant } from "../lib/motion"
import { styles } from "@/app/styles"
import { useRef } from "react"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These projects demonstrate my skills and experience in action. You can
          see how I tackled real-world problems, used different technologies,
          and managed projects successfully. Each project has a short
          description and links to code repositories and live demos for you to
          explore. It shows my passion for creating innovative solutions and
          delivering quality results.
        </motion.p>
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 mt-20 ">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </>
  )
}

export default SectionWrapper(Projects, "projects")

// "use client";

// import { motion } from "framer-motion";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../lib/motion";
// import { styles } from "@/app/styles";
// import ProjectCard from "./Project";

// const Projects = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} `}>My work</p>
//         <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
//       </motion.div>

//       <div className="w-full flex">
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
//         >
//           These projects demonstrate my skills and experience in action. You can
//           see how I tackled real-world problems, used different technologies,
//           and managed projects successfully. Each project has a short
//           description and links to code repositories and live demos for you to
//           explore. It shows my passion for creating innovative solutions and
//           delivering quality results.
//         </motion.p>
//       </div>

//       <div className="mt-20 flex flex-wrap gap-7">
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Projects, "projects");
