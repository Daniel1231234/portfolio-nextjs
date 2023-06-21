"use client";

import { ProjectCardProps, Tag } from "@/constants/constants";
import { fadeIn } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}: ProjectCardProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div
          className="relative w-full h-[230px] opacity-100 hover:opacity-80 transition-opacity cursor-pointer"
          onClick={() => window.open(demo_link, "_blank")}
        >
          <Image
            src={image}
            fill
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl  "
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src="/github.png"
                width={20}
                height={20}
                alt="source code"
                className=" object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: Tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
