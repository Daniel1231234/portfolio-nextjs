"use client"

import { Code2Icon, HomeIcon, InfoIcon, Laptop2, MailIcon } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")

  return (
    <nav className="flex sm:hidden max-w-max bg-slate-900 bg-opacity-30 transform px-7 py-2 z-20 fixed left-1/2 bottom-8 backdrop-filter backdrop-blur-lg  justify-center items-center gap-3 rounded-full -translate-x-1/2">
      <a
        href="#"
        className={cn(
          "p-[0.9rem] rounded-full flex text-white hover:bg-primary",
          activeNav === "#" && "bg-primary",
          activeNav === "#" && "focus:bg-primary focus:text-white"
        )}
        onClick={() => setActiveNav("#")}
      >
        <HomeIcon />
      </a>
      <a
        href="#about"
        className={cn(
          "p-[0.9rem] rounded-full flex text-white  hover:bg-primary",
          activeNav === "#about" && "bg-primary",
          activeNav === "#about" && "focus:bg-primary focus:text-white"
        )}
        onClick={() => setActiveNav("#about")}
      >
        <InfoIcon />
      </a>
      <a
        href="#skills"
        className={cn(
          "p-[0.9rem] rounded-full flex text-white  hover:bg-primary ",
          activeNav === "#skills" && "bg-primary",
          activeNav === "#skills" && "focus:bg-primary focus:text-white"
        )}
        onClick={() => setActiveNav("#skills")}
      >
        <Code2Icon />
      </a>
      <a
        href="#projects"
        className={cn(
          "p-[0.9rem] rounded-full flex text-white  hover:bg-primary ",
          activeNav === "#projects" && "bg-primary",
          activeNav === "#projects" && "focus:bg-primary focus:text-white"
        )}
        onClick={() => setActiveNav("#projects")}
      >
        <Laptop2 />
      </a>
      <a
        href="#contact"
        className={cn(
          "p-[0.9rem] rounded-full flex text-white  hover:bg-primary ",
          activeNav === "#contact" && "bg-primary",
          activeNav === "#contact" && "focus:bg-primary focus:text-white"
        )}
        onClick={() => setActiveNav("#contact")}
      >
        <MailIcon />
      </a>
    </nav>
  )
}

export default Nav
