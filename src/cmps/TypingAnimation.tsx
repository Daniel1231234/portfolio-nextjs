import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export const AnimatedText = () => {
  const [showName, setShowName] = useState(false)
  const [showDesc, setShowDesc] = useState(false)

  setTimeout(() => {
    setShowName(true);
  }, 3000);

  setTimeout(() => {
    setShowDesc(true);
  }, 6000);

  return (
    <>
      <span className="text-xl text-white">
        <Typewriter
          words={["Hi!", "My Name Is"]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
      {showName && (
        <span className="text-4xl tracking-wider text-white ">
          <Typewriter words={["Daniel Shalem"]} loop={1} cursor />
        </span>
      )}
      {showDesc && (
        <span className="text-1xl  text-white font-mono">
            <Typewriter words={["I'm A Full Stack Web Developer ."]} loop={1} cursor />
        </span>
      )}
    </>
  );
};
