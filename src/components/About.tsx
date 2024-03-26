"use client"

import { SectionWrapper } from "@/hoc"
import { fadeIn, textVariant } from "@/lib/motion"
import { motion } from "framer-motion"
import Button from "./UI/Button"
import Image from "next/image"

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <motion.div variants={textVariant()} className="flex flex-col my-4">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Introduction
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview.
        </h2>
        <motion.p
          variants={fadeIn("right", "spring", 0.1, 2)}
          className="mt-4 text-secondary text-[17px] leading-[30px] max-w-3xl"
        >
          {`I'm a full-stack developer passionate about crafting efficient, scalable, and user-centric applications.  Fueled by my expertise in TypeScript, JavaScript, and frameworks like React, Node.js, and Next.js, I thrive in fast-paced environments and possess a knack for adapting to new technologies.  I'm a strong collaborator, working closely with clients to translate their visions into tangible solutions that tackle real-world problems. Let's connect and bring your next project to life!`}
        </motion.p>
        <div className="flex items-center justify-center gap-4 my-10 z-50 relative">
          <Button>
            <a href="#contact">Lets Talk!</a>
          </Button>
          <Button variant="ghost">
            <a href="/resumeDaniel.pdf" download>
              Download my CV
            </a>
          </Button>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "spring", 0.2, 2)}
        className="hidden lg:block select-none lg:mt-6 md:mt-0"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={550}
          width={550}
          draggable={false}
        />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(About, "about")
