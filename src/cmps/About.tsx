"use client";

import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/lib/motion";
import { motion } from "framer-motion";
import { styles } from "@/app/styles";
import Button from "./UI/Button";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col my-4">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className="flex flex-col items-start">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {`As a full stack developer, I have a knack for TypeScript and
          JavaScript, and a mastery of frameworks such as React, Node.js, and
          Next.js. I can adapt to new technologies and work closely with clients
          to deliver efficient, scalable, and user-friendly solutions that
          address real-world challenges. I'm excited to collaborate with you and
          turn your vision into reality!`}
        </motion.p>
        <div className="flex items-center justify-center gap-4 mt-10">
          <Button>
            <a href="#contact">Lets Talk!</a>
          </Button>
          <Button variant="ghost">
            <a href="/resumeDaniel.pdf" download>
              Download my CV
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
