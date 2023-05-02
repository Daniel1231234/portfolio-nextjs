"use client";

import { CheckCircle } from "lucide-react";
import Card from "./UI/Card";
import { skillsData } from "@/data/skills";

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="container reveal flex flex-col sm:flex-row justify-between gap-6">
        {skillsData.map((skill) => (
          <Card key={skill.id} className="">
            <h3 className="text-primary mb-8 text-center">{skill.title}</h3>
            <div className="skills__content flex flex-wrap flex-col items-start gap-[0.8rem]">
              {skill.items.map((item, idx) => (
                <article key={idx} className="skills__details flex gap-4">
                  <CheckCircle className="skills__details-icon text-primary mt-1.5" />
                    <h4>{item}</h4>
                </article>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
