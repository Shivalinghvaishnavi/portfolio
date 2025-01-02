import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Vaishnavi Shivalingh</h3>
        <p className="text-lg font-normal text-gray-400">
          Web and Mobile Developer
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:
          <a
            href="tel:+917989861243"
            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
          >
            +91 7989861243
          </a>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:
          <a
            href="mailto:vaishnavishivalingh26@gmail.com"
            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
          >
            vaishnavishivalingh26@gmail.com
          </a>
        </p>

      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft