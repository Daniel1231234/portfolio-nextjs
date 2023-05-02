import { aboutData } from "@/data/about";
import { Icons } from "./Icons";


const About = () => {
  return (
    <section className="container" id="about">
      <h2 className="section-title">About me</h2>
      <div className="about-container reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
        {aboutData.map((item) => {
          const Icon = Icons[item.Icon]
          return (
            <div key={item.title} className="card flex  mb-10 sm:mb-0 flex-col items-center p-5 bg-card rounded-2xl transition-all ease-out hover:-translate-y-3">
            <div className="icon mb-5">
              <Icon className="text-[1.5rem]" />
            </div>
            <div className="content text-center">
              <h3 className="text-2xl text-[#4db5ff] mb-5 ">
                {item.title}
              </h3>
              <p className="leading-6 text-justify">
                {item.desc}
              </p>
            </div>
          </div>
          )
        })}
      </div>
    </section>
  );
};

export default About;
