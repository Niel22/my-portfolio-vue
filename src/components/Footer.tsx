import { Mail } from "lucide-react";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-12 pb-20">
      <hr className="mt-23" />

      <div className="mt-6 text-center">
        <span className="text-gray-600 text-sm tracking-normal">
          © {new Date().getFullYear()} James Daniel. All rights reserved.
        </span>

        <div className="flex items-center justify-center gap-6 mt-2">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://x.com/codeNovaNiel"
          >
            <FaXTwitter className="size-5 text-gray-700 hover:text-gray-600 cursor-pointer" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Niel22"
          >
            <FiGithub className="size-5 text-gray-70 hover:text-gray-600 cursor-pointer" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/jamesdaniel2264/"
          >
            <FaLinkedin className="size-5 text-gray-700 hover:text-gray-600 cursor-pointer" />
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href="mailto:niel2264@gmail.com"
          >
            <Mail className="size-5 text-gray-700 hover:text-gray-600 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
