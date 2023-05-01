import React from "react"
import {FaFacebookF} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="bg-primary reveal py-12 px-0 text-center mt-28">
      <ul className="permalinks flex flex-col md:flex-row sm:flex-wrap justify-center gap-6 sm:gap-8 mt-0 mx-auto mb-12">
        <li>
          <a href="#header" className="text-bg">Home</a>
        </li>
        <li>
          <a href="#about" className="text-bg">About</a>
        </li>
        <li>
          <a href="#skills" className="text-bg">Skills</a>
        </li>
        <li>
          <a href="#projects" className="text-bg">Projects</a>
        </li>
        <li>
          <a href="#contact" className="text-bg">Contact</a>
        </li>
      </ul>

      <div className="footer__socials flex justify-center gap-4 mb-[2.6rem] sm:mb-16">
        <a className="p-3 bg-body rounded-sm hover:bg-transparent hover:border hover:border-body flex border-solid border-transparent "
          href="https://www.facebook.com/daniel.shechter.5/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a className="p-3 bg-body rounded-sm hover:bg-transparent hover:border hover:border-body flex border-solid border-transparent"
          href="https://github.com/Daniel1231234"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a className="p-3 bg-body rounded-sm hover:bg-transparent hover:border hover:border-body flex border-solid border-transparent"
          href="https://www.linkedin.com/in/daniel-shalem-990429211/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
