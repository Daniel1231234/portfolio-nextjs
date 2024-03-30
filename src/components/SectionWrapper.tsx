"use client"

import { motion } from "framer-motion"
import { ComponentType } from "react"

const SectionWrapper = (Component: ComponentType, idName: string) =>
  function HOC() {
    return (
      <motion.section
        id={idName}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`sm:px-16 px-6 sm:py-16 py-10 mx-auto relative z-0 scroll-mt-20`}
      >
        <Component />
      </motion.section>
    )
  }

export default SectionWrapper
