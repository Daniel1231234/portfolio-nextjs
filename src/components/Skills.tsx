"use client"

import { SectionWrapper } from "@/hoc"
import { SKILL_DATA } from "@/constants"
import { motion } from "framer-motion"
import { textVariant } from "@/lib/motion"
import { SkillDataProvider } from "./canvas/SkillsDataProvider"

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col mt-4 mb-16">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My skills
        </p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        <div className="flex flex-row justify-center flex-wrap my-8 gap-5 items-center max-w-6xl">
          {SKILL_DATA.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Skills, "skills")
