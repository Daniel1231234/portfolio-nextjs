"use client"

import { Code2Icon, HomeIcon, InfoIcon, Laptop2, MailIcon } from "lucide-react"
import useNavbar from "@/hooks/useNavbar"
import { useState, useEffect } from "react"

const navItems = [
  { to: "home", icon: HomeIcon },
  { to: "about", icon: InfoIcon },
  { to: "skills", icon: Code2Icon },
  { to: "projects", icon: Laptop2 },
  { to: "contact", icon: MailIcon },
]

const Nav = () => {
  const { isFooterInView } = useNavbar()
  const [activeNav, setActiveNav] = useState("#")

  const handleNavClick = (to: string) => {
    const section = document.getElementById(to)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setActiveNav(`#${to}`)
    }
  }

  const handleScroll = () => {
    const currentSection = navItems.find(({ to }) => {
      const section = document.getElementById(to)
      if (section) {
        const sectionTop = section.getBoundingClientRect().top
        return sectionTop >= 0 && sectionTop < window.innerHeight / 2
      }
      return false
    })

    setActiveNav(currentSection ? `#${currentSection.to}` : "#")
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`flex sm:hidden bg-mainDark bg-opacity-30 transform px-4 py-2 z-20 fixed left-1/2 bottom-4 backdrop-filter backdrop-blur-lg justify-center items-center gap-2 rounded-full -translate-x-1/2 ${
        isFooterInView ? "hidden" : ""
      }`}
    >
      {navItems.map(({ to, icon: Icon }) => (
        <a
          key={to}
          onClick={() => handleNavClick(to)}
          className={`p-4 cursor-pointer rounded-full flex text-white hover:bg-indigo-500 ${
            activeNav === `#${to}` ? "bg-indigo-500" : ""
          }`}
        >
          <Icon className=" w-5 h-5" />
        </a>
      ))}
    </nav>
  )
}

export default Nav
