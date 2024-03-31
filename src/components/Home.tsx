"use client"

import SectionWrapper from "./SectionWrapper"
import { motion } from "framer-motion"
import { Button } from "./UI/Button"
import { useRouter } from "next/navigation"
import { edu } from "@/app/fonts"

const Home = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col justify-center mt-28 text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-left mb-10"
      >
        <h4 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4">{`Hi, I'm`}</h4>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl  sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold whitespace-nowrap"
        >
          <span className="text-gray-500 hover:text-gray-400">Daniel </span>
          <span className="text-indigo-500">Shalem</span>
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-8"
      >
        <h4
          className={`${edu.className} text-lg md:text-xl lg:text-2xl xl:text-3xl font-light`}
        >
          Full Stack Developer | Coding Mentor | Tech Enthusiast
        </h4>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <Button
          size="lg"
          className="border-indigo-500 border-2 mx-auto"
          onClick={() => router.push("#contact")}
        >
          Contact me today!
        </Button>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Home, "home")
