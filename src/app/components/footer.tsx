import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-6 lg:mb-0">
          <h2 className="text-xl font-bold text-white">Farihas Blog</h2>
          <p className="text-sm text-gray-400">
            Sharing insights stories and knowledge.
          </p>
        </div>

        <nav className="flex space-x-6 mb-6 lg:mb-0">
          <Link
            href="#home"
            className="hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-yellow-400 transition duration-300"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="hover:text-yellow-400 transition duration-300"
          >
            Contact
          </Link>
        </nav>

        <div className="flex space-x-4">
          <Link
            href="https://www.facebook.com/fariha.zia.54?mibextid=ZbWKwL"
            target="blank"
            className="hover:text-yellow-400 transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF className="w-6 h-6" />
          </Link>
          <Link
            href="https://x.com/Faariha_zia?t=hccDjWYfmN3cC-u2cIq6Hg&s=09"
            target="blank"
            className="hover:text-yellow-400 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter className="w-6 h-6" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/fariha-zia-1870692b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="blank"
            className="hover:text-yellow-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </Link>
        </div>
      </div>{" "}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Farihas Blog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
