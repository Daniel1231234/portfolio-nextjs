"use client";

import { Project, projectsData } from "@/data/projects";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Button from "./UI/Button";

const ProjectItem = ({
  proj,
  className,
}: {
  proj: Project;
  className?: string;
}) => {
  return (
    <Card className={`w-full min-h-fit ${className}`}>
      <CardHeader color="blue" className="relative">
        <Image
          src={proj.image}
          alt={proj.title}
          className="mx-auto my-auto"
          sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
          width={458}
          height={320}
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {proj.title}
        </Typography>
        <Typography className="text-justify">{proj.desc}</Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Button size="sm">
          <a
            href={proj.github}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Source code
          </a>
        </Button>
        <Button size="sm" variant="ghost">
          <a href={proj.demo} className="btn" target="_blank" rel="noreferrer">
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectItem;
