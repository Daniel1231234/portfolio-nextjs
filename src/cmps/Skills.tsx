"use client"

import { useEffect, useState } from "react"
import { SectionWrapper } from "@/hoc"
import { skills } from "@/constants"
import { BallCanvas } from "./canvas"
import { motion } from "framer-motion"
import { styles } from "@/app/styles"
import { textVariant } from "@/lib/motion"
import Image from "next/image"

const Skills = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)")
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col my-4">
        <p className={styles.sectionSubText}>My skills</p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {skills.map((skill) => (
          <div className="w-28 h-28 " key={skill.name} title={skill.name}>
            {isMobile ? (
              <Image
                src={skill.icon}
                alt={skill.name}
                width={60}
                height={60}
                className="rounded-sm shadow "
              />
            ) : (
              <BallCanvas icon={skill.icon} />
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Skills, "skills")
