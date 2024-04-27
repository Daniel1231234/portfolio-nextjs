"use client"

import { fadeIn, textVariant } from "@/lib/motion"
import { motion } from "framer-motion"
import { Button } from "./UI/Button"
import Image from "next/image"
import SectionWrapper from "./SectionWrapper"
import { useRouter } from "next/navigation"
import Link from "next/link"

const About = () => {
  const router = useRouter()

  return (
    <section className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto">
      <motion.div variants={textVariant()} className="flex flex-col my-4">
        <p className="sm:text-[18px] text-[14px] text-mainLight uppercase tracking-wider">
          Introduction
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview.
        </h2>
        <motion.p
          variants={fadeIn("right", "spring", 0.1, 2)}
          className="mt-4 text-mainLight text-[17px] leading-[30px] max-w-3xl"
        >
          {`I'm a full-stack developer passionate about crafting efficient, scalable, and user-centric applications.  
          Fueled by my expertise in TypeScript, JavaScript, and frameworks like React, Node.js, and Next.js, 
          I thrive in fast-paced environments and possess a knack for adapting to new technologies.  
          I'm a strong collaborator, working closely with clients 
          to translate their visions into tangible solutions that tackle real-world problems. 
          Let's connect and bring your next project to life!`}
        </motion.p>
        <div className="flex items-center justify-center gap-4 my-10 z-50 relative">
          <Button variant="default" onClick={() => router.push("#contact")}>
            {`Let's Talk!`}
          </Button>

          <Link
            href="/Daniel_Shalem_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="active:scale-95 text-white inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-transparent border border-white hover:border-transparent transition duration-150 ease-in-out h-10 py-2 px-4"
          >
            Download my CV
          </Link>
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
    </section>
  )
}

export default SectionWrapper(About, "about")
