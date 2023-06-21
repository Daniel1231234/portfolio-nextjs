"use client";

import { SectionWrapper } from "@/hoc";
import { skills } from "@/constants";
import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";
import { styles } from "@/app/styles";
import { textVariant } from "@/lib/motion";

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col my-4">
        <p className={styles.sectionSubText}>My skills</p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {skills.map((skill) => (
          <div className="w-28 h-28" key={skill.name} title={skill.name}>
            <BallCanvas icon={skill.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
