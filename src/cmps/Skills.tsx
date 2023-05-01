"use client";

import { CheckCircle } from "lucide-react";
import Card from "./UI/Card";

const skillsData = [
  {
    id: 1,
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Node.js", "Python"],
  },
  {
    id: 2,
    title: "Frameworks",
    items: ["React.js", "Next.js", "Vue.js", "Nest.js", "Tailwind.css"],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="container reveal flex flex-col md:flex-row justify-between gap-6">
        {skillsData.map((skill) => (
          <Card key={skill.id} className="!md:h-fit">
            <h3 className="text-primary mb-8 text-center">{skill.title}</h3>
            <div className="skills__content flex flex-wrap md:flex-col items-start gap-3">
              {skill.items.map((item, idx) => (
                <article key={idx} className="skills__details flex gap-4">
                  <CheckCircle className="skills__details-icon text-primary" />
                  <div>
                    <h4>{item}</h4>
                  </div>
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
