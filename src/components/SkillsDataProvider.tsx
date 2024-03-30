"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./UI/Tooltip"

type SkillDataProviderProps = {
  src: string
  name: string
  width: number
  height: number
  index: number
}

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const animationDelay = 0.1

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
          >
            <Image
              src={`/tech/${src}`}
              width={width}
              height={height}
              alt={name}
              priority
            />
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
