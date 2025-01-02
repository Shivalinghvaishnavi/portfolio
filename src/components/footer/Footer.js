import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import {logo, vaishnavilogo} from "../../assets/index"

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={vaishnavilogo} alt="logo" />
        <div className="flex gap-4">
        <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/vaishnavi-shivalingh/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </span>
        <span className="bannerIcon">
          <a href="https://github.com/Shivalinghvaishnavi" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </span>
        <span className="bannerIcon">
          <a href="https://x.com/VShivaling75002" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </span>
      </div>
      </div>
      <div className="w-full h-full">
  <h3 className="text-xl uppercase text-designColor tracking-wider">
    Quick Link
  </h3>
  <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
    <li>
      <a
        href="/about"
        className="w-full text-lg relative hover:text-designColor duration-300 group"
      >
        About
        <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
      </a>
    </li>
    <li>
      <a
        href="/portfolio"
        className="w-full text-lg relative hover:text-designColor duration-300 group"
      >
        Portfolio
        <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
      </a>
    </li>
    <li>
      <a
        href="/services"
        className="w-full text-lg relative hover:text-designColor duration-300 group"
      >
        Services
        <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
      </a>
    </li>
    <li>
      <a
        href="/blog"
        className="w-full text-lg relative hover:text-designColor duration-300 group"
      >
        Blog
        <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
      </a>
    </li>
    <li>
      <a
        href="/contact"
        className="w-full text-lg relative hover:text-designColor duration-300 group"
      >
        Contact
        <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
      </a>
    </li>
  </ul>
</div>

    </div>
  );
}

export default Footer