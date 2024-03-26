import React from "react"
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  imgUrl: string
  title: string
  description: string
  previewUrl: string
  gitUrl?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <>
      <Image
        src={imgUrl}
        alt={title}
        width={1000}
        height={1000}
        className="w-full"
      />
      <div className="p-4 relative flex-1">
        <h5 className="text-2xl font-semibold text-white">{title}</h5>
        <p className="mt-2 text-md text-secondary leading-7">{description}</p>
      </div>
      <div className="flex space-x-4 p-4 ">
        {gitUrl && (
          <Link
            href={gitUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-400 hover:text-white transition"
          >
            <CodeBracketIcon className="h-6 w-6" />
          </Link>
        )}
        <Link
          href={previewUrl}
          className="text-gray-400 hover:text-white transition"
        >
          <EyeIcon className="h-6 w-6" />
        </Link>
      </div>
    </>
  )
}

export default ProjectCard
