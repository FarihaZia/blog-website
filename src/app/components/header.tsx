import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-2xl font-bold">AI and Modern World</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="#home"
            className="mr-5 hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="mr-5 hover:text-yellow-300 transition duration-300"
          >
            About
          </Link>
          <Link
            href="#blog"
            className="mr-5 hover:text-yellow-300 transition duration-300"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
