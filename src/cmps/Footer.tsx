import React from "react";
import { Icons } from "./Icons";
import { permalinks, socialsData } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 px-0 text-center">
      <ul className="flex flex-col md:flex-row sm:flex-wrap justify-center gap-6 sm:gap-8 mt-0 mx-auto mb-12">
        {permalinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-bg">
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="footer__socials flex justify-center gap-4 mb-[2.6rem] sm:mb-16">
        {socialsData.map((opt) => {
          const Icon = Icons[opt.Icon];
          return (
            <a
              key={opt.href}
              className="bg-body flex border p-[0.8rem] rounded-[0.7rem] border-solid border-transparent  hover:border-body hover:bg-inherit"
              href={opt.href}
              target="_blank"
              rel="noreferrer"
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
