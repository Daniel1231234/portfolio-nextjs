import { FaLaptopCode } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FC } from "react";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <section className="container" id="about">
      <h2 className="section-title">About me</h2>

      <div className="about-container reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
        <div className="card flex  mb-10 sm:mb-0 flex-col items-center p-5 bg-card rounded-2xl transition-all ease-out hover:-translate-y-3">
          <div className="icon mb-5">
            <FaLaptopCode />
          </div>
          <div className="content text-center">
            <h3 className="text-2xl text-[#4db5ff] mb-5 ">
              Full-stack Web Developer
            </h3>
            <p className="leading-6 text-justify">
             {` Hey there! My name is Daniel Shalem and I'm a full-stack web
              developer. I love a good challenge and I've had the opportunity to
              work with some of the latest and greatest web technologies
              including Node.js, React.js, Vue.js, Nest.js, Express.js and
              MongoDB.`}
            </p>
          </div>
        </div>

        <div className="card flex  mb-10 sm:mb-0 flex-col items-center p-5 bg-card rounded-2xl transition-all  ease-out hover:-translate-y-3">
          <div className="icon mb-5">
            <FaUsers />
          </div>
          <div className="content text-center">
            <h3 className="text-2xl text-[#4db5ff] mb-5 ">
              Passionate Team Player
            </h3>
            <p className="leading-6 text-justify">
             {` As a team player, I'm always eager to learn and grow. I'm a
              self-learner at heart and passionate about all things technology.
              I pride myself on adapting quickly to new environments, and I
              bring a unique perspective to every project I work on.`}
            </p>
          </div>
        </div>
        <div className="card flex flex-col  mb-10 sm:mb-0 items-center p-5 bg-card rounded-2xl transition-all  ease-out hover:-translate-y-3">
          <div className="icon mb-5">
            <FaGraduationCap />
          </div>
          <div className="content text-center">
            <h3 className="text-2xl text-[#4db5ff] mb-5">
              Education & Experience
            </h3>
            <p className="leading-6 text-justify">
              {`I completed an intensive coding bootcamp at Coding Academy, where
              I gained over 640 hours of experience in full-stack development.
              Additionally, I hold a Bachelor's degree in Social Work and a
              Master's degree in International Relations from Haifa University.
              I'm excited to connect with you and share my knowledge and
              experience. Let's build something great together!`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
