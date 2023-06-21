"use client";

import { styles } from "@/app/styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "@/hoc";
import { useEffect, useState } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div id="home" className="relative w-full h-screen mx-auto ">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {"Hi, I'm "}
            <span className="text-[#915EFF]">{"Daniel"}</span>
          </h1>
          <p className={`${styles.heroSubText} my-6 md:my-2 text-white-100`}>
            {"I'm A Full Stack Web Developer"}
          </p>
        </div>
      </div>
      {!isMobile && <ComputersCanvas />}
    </div>
  );
};

export default SectionWrapper(Home, "home");
