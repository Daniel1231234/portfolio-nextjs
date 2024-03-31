"use client"

import React from "react"
import Link from "next/link"
import { Icons } from "./Icons"
import { SOCIAL_DATA } from "@/constants"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="text-white body-font backdrop-blur-lg bg-mainDark py-6">
      <div className="sm:px-16 px-auto mx-auto flex items-center sm:flex-row flex-col font-thin max-w-7xl">
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width="30"
            height="60"
            className=" w-auto h-auto hidden sm:block"
          />
          <span className="ml-3 text-xl">Daniel Shalem</span>
        </Link>

        <p className="text-gray-500 text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-500 sm:py-2 sm:mt-0 mt-4">
          © 2024 <span className="text-indigo-500"> All rights reserved.</span>
        </p>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3">
          {SOCIAL_DATA.map((opt) => {
            const Icon = Icons[opt.Icon]
            return (
              <Link
                key={opt.href}
                href={opt.href}
                className="hover:text-indigo-500"
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="text-xl" />
              </Link>
            )
          })}
        </span>
      </div>
    </footer>
  )
}

export default Footer
