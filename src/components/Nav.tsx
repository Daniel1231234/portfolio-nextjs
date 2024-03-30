"use client"

import { Code2Icon, HomeIcon, InfoIcon, Laptop2, MailIcon } from "lucide-react"

import { Link } from "react-scroll"
import useNavbar from "@/hooks/useNavbar"

const navItems = [
  { to: "home", icon: HomeIcon },
  { to: "about", icon: InfoIcon },
  { to: "skills", icon: Code2Icon },
  { to: "projects", icon: Laptop2 },
  { to: "contact", icon: MailIcon },
]

const Nav = () => {
  const { activeNav, setActiveNav, isAtBottom } = useNavbar()

  return (
    <nav
      className={`flex sm:hidden bg-mainDark bg-opacity-30 transform px-4 py-2 z-20 fixed left-1/2 bottom-4 backdrop-filter backdrop-blur-lg justify-center items-center gap-2 rounded-full -translate-x-1/2 ${
        isAtBottom ? "hidden" : ""
      }`}
    >
      {navItems.map(({ to, icon: Icon }) => (
        <Link
          activeClass="active"
          key={to}
          to={to}
          spy={true}
          offset={-50}
          className={`p-4 cursor-pointer rounded-full flex text-white hover:bg-indigo-500 ${
            activeNav === to ? "bg-indigo-500" : ""
          }`}
          onSetActive={() => setActiveNav(to)}
        >
          <Icon className=" w-5 h-5" />
        </Link>
      ))}
    </nav>
  )
}

export default Nav
