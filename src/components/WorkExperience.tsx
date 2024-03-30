"use client"

import React from "react"
import SectionWrapper from "./SectionWrapper"
import { FaExternalLinkAlt } from "react-icons/fa"
import { motion } from "framer-motion"

interface Job {
  title: string
  company: string
  period: string
  url: string
  responsibilities: string[]
}

interface WorkExperienceProps {}

const JOBS: Job[] = [
  {
    title: "Backend Developer",
    company: "Sellme",
    period: "2023 - Present",
    url: "https://sellme.space/",
    responsibilities: [
      "Developed backend APIs using Nest.js, TypeScript, and AWS.",
      "Implemented API integrations with third-party services.",
      "Optimized performance and scalability of backend systems.",
      "Collaborated with clients to understand requirements and deliver solutions.",
    ],
  },
  {
    title: "Full Stack Lecturer",
    company: "SVCollege",
    period: "2023 - Present",
    url: "https://svcollege.co.il/",
    responsibilities: [
      "Qualified students to become full stack developers, teaching JS, React, Node.js, Express.js, MongoDB, and React Native.",
      "Fully responsible for student success and progression in the program.",
    ],
  },
  {
    title: "Project Lead Developer",
    company: "Virtual Music Show App",
    period: "2022 - Present",
    url: "",
    responsibilities: [
      "Developing a virtual space app for music shows using WorkAdventure, tiles software, and JavaScript.",
      "Creating an immersive platform for live music performances.",
    ],
  },
]

const WorkExperience: React.FC<WorkExperienceProps> = () => {
  return (
    <section className="bg-card py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-3xl font-semibold text-white">Work Experience</h2>
        </motion.div>
        <div className="space-y-6">
          {JOBS.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-mainDark p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl text-white font-semibold mb-2">
                  {job.title} - {job.company}
                </h3>
                {job.url && (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-500 transition duration-300"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
              <p className="text-mainLight mb-4">{job.period}</p>
              <ul className="list-disc list-inside text-mainLight">
                {job.responsibilities.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(WorkExperience, "WorkExperience")
