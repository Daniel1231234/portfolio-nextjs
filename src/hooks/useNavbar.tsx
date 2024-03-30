"use client"

import { useState, useEffect } from "react"

const useNavbar = () => {
  const [activeNav, setActiveNav] = useState<string>("")
  const [isAtTop, setIsAtTop] = useState<boolean>(true)
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false)

  useEffect(() => {
    const storedNavbarBg = localStorage.getItem("navbarBg")
    if (storedNavbarBg) {
      setActiveNav(JSON.parse(storedNavbarBg))
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight

      setIsAtTop(scrollTop === 0)
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 5)
    }

    window.addEventListener("scroll", handleScroll)
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

  return { activeNav, setActiveNav, isAtTop, isAtBottom }
}

export default useNavbar
