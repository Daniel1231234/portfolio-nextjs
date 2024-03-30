"use client"

import { motion, useInView } from "framer-motion"
import SectionWrapper from "./SectionWrapper"
import { projectsData } from "../constants"
import { fadeIn, textVariant } from "../lib/motion"
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
        <p className="sm:text-[18px] text-[14px] text-mainLight uppercase tracking-wider">
          My work
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-mainLight text-[17px] max-w-3xl leading-[30px]"
      >
        {`Dive deeper into my work and explore how I've tackled real-world
        challenges with innovative solutions. These projects showcase my
        proficiency in various technologies, project management skills, and the
        ability to deliver high-quality results. Each project includes a brief
        description, along with links to code repositories and live demos for
        your interactive exploration`}
      </motion.p>

      <ul
        ref={ref}
        className="h-full w-full flex flex-col lg:flex-row gap-10 mt-20 "
      >
        {projectsData.map((project, index) => (
          <motion.li
            className="lg:w-1/3 rounded-lg overflow-hidden bg-card shadow-2xl  flex flex-col justify-between "
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
