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
            className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px]"
          >
            <Image
              src={`/tech/${src}`}
              width={width}
              height={height}
              alt={name}
              priority
              className="h-auto w-auto"
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
