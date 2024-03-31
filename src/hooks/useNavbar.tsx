"use client"

import { useState, useEffect } from "react"

const useNavbar = () => {
  const [activeNav, setActiveNav] = useState<string>("")
  const [isAtTop, setIsAtTop] = useState<boolean>(true)
  const [isFooterInView, setIsFooterInView] = useState<boolean>(false)

  const checkFooterInView = () => {
    const footer = document.querySelector("footer")
    if (footer) {
      const footerRect = footer.getBoundingClientRect()
      const footerInView = footerRect.top < window.innerHeight
      setIsFooterInView(footerInView)
    }
  }

  useEffect(() => {
    const storedNavbarBg = localStorage.getItem("navbarBg")
    if (storedNavbarBg) {
      setActiveNav(JSON.parse(storedNavbarBg))
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsAtTop(scrollTop === 0)
      checkFooterInView()
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    localStorage.setItem("navbarBg", JSON.stringify(activeNav))
  }, [activeNav])

  useEffect(() => {
    if (isAtTop) {
      setActiveNav("")
    }
  }, [isAtTop])

  return { activeNav, setActiveNav, isAtTop, isFooterInView }
}

export default useNavbar
