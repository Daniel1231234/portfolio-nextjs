"use client";

import { FC} from "react";
import Button from "./UI/Button";
import { AnimatedText } from "./TypingAnimation";
import Image from "next/image";

interface HeaderProps {}

const Home: FC<HeaderProps> = () => {

  return (
    <div
      id="home"
      className="h-screen w-full "
    >
      <div className="flex m-auto flex-col-reverse md:flex-row items-center justify-evenly w-full ">

      <div className="relative h-[450px] md:w-1/2 md:mx-auto my-auto w-11/12 ">
        <Image className="max-w-[500px] m-auto"
          src="/profile.png"
          alt="profile"
          fill
          sizes="(max-width: 768px) 100vw
              (max-width: 1280px) 50vw,
              33vw"
        />
      </div>

      <div className="md:w-1/2 w-11/12 flex flex-col justify-between h-full gap-3">
        <div className="flex flex-col items-center gap-4 text-center">
          <AnimatedText />
        </div>
        <div className="flex items-center justify-center gap-4">
          <Button>
            <a href="#contact">Lets Talk!</a>
          </Button>
          <Button variant="ghost">
            <a href="/resumeDaniel.pdf" download>
            Download my CV
            </a>
            </Button>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Home;
