import React from 'react';
import Title from '../layouts/Title';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub, FaGit, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiTypescript, SiExpress, SiHtml5, SiCss3, SiMysql, SiScss, SiMongodb, SiNodedotjs } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col lgl:gap-8">
      {/* Add gap between the two divs */}
      <div className="mt-0 mb-0"> {/* margin-top added to create gap */}
        <Title title="BEST SKILL ON" />
        <div className="flex flex-wrap gap-4">
          <div className="flex gap-4">
            <span className="flex flex-col items-center">
              <span className="bannerIcon">
                <SiHtml5 />
              </span>
              <span className="mt-2 text-sm">HTML</span>
            </span>

            <span className="flex flex-col items-center">
              <span className="bannerIcon">
                <SiCss3 />
              </span>
              <span className="mt-2 text-sm">CSS</span>
            </span>
            <span className="flex flex-col items-center">
              <span className="bannerIcon">
                <SiTailwindcss />
              </span>
              <span className="mt-2 text-sm">Tailwind CSS</span>
            </span>
          </div>

          <div className="flex gap-4">
            <span className="flex flex-col items-center">
              <span className="bannerIcon">
                <FaJs />
              </span>
              <span className="mt-2 text-sm">JavaScript</span>
            </span>

            <span className="flex flex-col items-center">
              <span className="bannerIcon">
                <SiTypescript />
              </span>
              <span className="mt-2 text-sm">TypeScript</span>
            </span>

            <span className="flex flex-col items-center">
              <span className="bannerIcon">
                <FaReact />
              </span>
              <span className="mt-2 text-sm">React.js</span>
            </span>

            <span className="flex flex-col items-center">
              <span className="bannerIcon">
                <SiNodedotjs />
              </span>
              <span className="mt-2 text-sm">Node.js</span>
            </span>
          </div>

          <div className="flex gap-4">
            <span className="flex flex-col items-center">
              <span className="bannerIcon">
                <SiExpress />
              </span>
              <span className="mt-2 text-sm">Express.js</span>
            </span>

            <span className="flex flex-col items-center">
              <span className="bannerIcon">
                <FaGit />
              </span>
              <span className="mt-2 text-sm">Git</span>
            </span>

            {/* <span className="flex flex-col items-center">
              <span className="bannerIcon">
                <SiMysql />
              </span>
              <span className="mt-2 text-sm">MySQL</span>
            </span> */}

            {/* <span className="flex flex-col items-center">
              <span className="bannerIcon">
                <SiMongodb />
              </span>
              <span className="mt-2 text-sm">MongoDB</span>
            </span> */}
          </div>
        </div>
      </div>
      <div className="flex gap-8 items-center">
  {/* Find Me In Section */}
  <div>
    <h2 className="text-base uppercase font-titleFont mb-4">
      Find me in
    </h2>
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

  {/* Resume Download Section */}
  <div>
    <h2 className="text-base uppercase font-titleFont mb-4">
      Download My Resume
    </h2>
    <div className="flex gap-4">

    <a
      href="../../assets/resume/Vaishnavi.pdf" 
      download
      className="bg-designColor text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition duration-300"
    >
      Download Resume
    </a>
    </div>
  </div>
</div>

    </div>
  );
}

export default Media;
