"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { styles } from "@/app/styles";
import { navLinks } from "@/constants";

const AppHeader = () => {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? " bg-primary" : "bg-transparent"
      } `}
    >
      <div className="w-full flex justify-between max-w-7xl mx-auto">
        <Link
          href="/"
          className="rounded-sm"
          onClick={() => {
            setActive("home");
          }}
        >
          <Image
            src="/logo.png"
            priority
            className="w-20 hover:opacity-80 transition-opacity cursor-pointer"
            alt="Dark Logo"
            width={150}
            height={120}
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => setActive(link.title)}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default AppHeader;
