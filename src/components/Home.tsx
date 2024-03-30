"use client"

import SectionWrapper from "./SectionWrapper"
import { motion } from "framer-motion"
import { Button } from "./UI/Button"
import { useRouter } from "next/navigation"
import { edu } from "@/app/fonts"

const Home = () => {
  const router = useRouter()

  return (
    <div className="z-10 text-left min-h-screen text-white mt-28 flex flex-col justify-start">
      <div className="mb-8 lg:mb-5 flex flex-col gap-4">
        <h4 className="text-lg sm:text-xl md:text-2xl">{`Hi, I'm`}</h4>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
        >
          <span className="text-gray-500 hover:text-gray-400">Daniel </span>
          <span className="text-indigo-500">Shalem</span>
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="mb-12"
      >
        <h4
          className={` ${edu.className} text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-wide`}
        >
          Full Stack Developer | Coding Mentor | Tech Enthusiast
        </h4>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1.4 }}
      >
        <Button
          size="lg"
          className="border-indigo-500 border-2"
          onClick={() => router.push("#contact")}
        >
          Contact me today!
        </Button>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Home, "home")
