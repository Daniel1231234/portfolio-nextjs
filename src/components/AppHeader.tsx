"use client"

import { Link } from "react-scroll"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import { cn } from "@/lib/utils"
import logoSrc from "../../public/logo.png"
import useNavbar from "@/hooks/useNavbar"

const AppHeader = () => {
  const { activeNav, setActiveNav, isAtTop } = useNavbar()

  const handleSetActive = (to: string) => {
    setActiveNav(to)
  }

  return (
    <header>
      <nav
        id="header"
        className={cn(
          "sm:px-16 px-6 w-full flex items-center py-3 fixed top-0 z-20",
          !isAtTop ? "bg-mainDark" : "bg-transparent"
        )}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link activeClass="active" to="home" className="rounded-sm">
            <Image
              src={logoSrc}
              priority
              className="w-20 hover:opacity-80 transition-opacity cursor-pointer"
              alt="Dark Logo"
              width={150}
              height={120}
            />
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  activeClass="active"
                  spy={true}
                  offset={-50}
                  onSetActive={handleSetActive}
                  className={cn(
                    activeNav === link.id ? "text-white " : "text-mainLight",
                    "hover:text-white text-base font-medium cursor-pointer"
                  )}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader
