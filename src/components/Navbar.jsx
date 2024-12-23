import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GoSun } from "react-icons/go";
import { LuSunMoon } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { FaBlogger } from "react-icons/fa6";
import { PiNetworkLight } from "react-icons/pi";
import { MdOutlineContactPhone } from "react-icons/md";
import { BsTextParagraph } from "react-icons/bs";

const navbar = ({
  searchBoxOpen,
  setSearchBoxOpen,
  setShowProfile,
  showProfile,
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <nav className="container absolute top-4 left-1/2 -translate-x-1/2 h-16 bg-white/30 backdrop-blur-md rounded-2xl w-8/12">
      <div className="subContainer flex justify-between items-center h-full px-4">
        <div className="left flex items-center gap-4">
          <div className="name overflow-hidden bg-cover h-12 w-12 rounded-full">
            <img
              onClick={() => setShowProfile(!showProfile)}
              className="cursor-pointer"
              src="https://avatars.githubusercontent.com/u/135945097?v=4"
              alt="Profile Picture"
            />
          </div>
          <a
            className="relative flex items-center justify-center gap-2 group"
            href="/"
          >
            <IoHomeOutline className="text-white text-2xl group-hover:blur-none group-hover:opacity-40" />
            <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-white py-1 transition-all ease-in-out duration-300 font-medium">
              Home
            </span>
          </a>
        </div>
        <div className="links flex gap-1">
          <a
            href="#blogs"
            className="text-white font-semibold hover:bg-white/40 px-4 py-2 rounded transition-all group relative overflow-hidden"
          >
            <span className="group-hover:opacity-40 group-hover:blur-none">
              Blogs
            </span>
            <FaBlogger
              size={40}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 py-1 transition-all ease-in-out duration-300 text-purple-600 bg-orange-300 w-full h-full"
            />
          </a>
          <a
            href="#projects"
            className="text-white font-semibold hover:bg-white/40 px-4 py-2 rounded transition-all group relative overflow-hidden"
          >
            <span className="group-hover:opacity-40 group-hover:blur-none">
              Projects
            </span>
            <PiNetworkLight
              size={40}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 py-1 transition-all ease-in-out duration-300 text-green-600 bg-blue-300 w-full h-full"
            />
          </a>
          <a
            href="#about"
            className="text-white font-semibold hover:bg-white/40 px-4 py-2 rounded transition-all group relative overflow-hidden"
          >
            <span className="group-hover:opacity-40 group-hover:blur-none">
              About
            </span>
            <BsTextParagraph
              size={40}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 py-1 transition-all ease-in-out duration-300 text-red-600 bg-gray-300 w-full h-full"
            />
          </a>
          <a
            href="#contact"
            className="text-white font-semibold hover:bg-white/40 px-4 py-2 rounded transition-all group relative overflow-hidden"
          >
            <span className="group-hover:opacity-40 group-hover:blur-none">
              Contact
            </span>
            <MdOutlineContactPhone
              size={40}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 py-1 transition-all ease-in-out duration-300 text-black bg-purple-300 w-full h-full"
            />
          </a>
          <button className="px-4 py-2">
            <CiSearch
              className="text-white text-2xl"
              onClick={() => setSearchBoxOpen(!searchBoxOpen)}
            />
          </button>
          <button className="px-4 py-2">
            {isDarkMode ? (
              <GoSun
                className="text-white text-2xl delay-300 ease-in-out transition-transform"
                onClick={() => setIsDarkMode(!isDarkMode)}
              />
            ) : (
              <LuSunMoon
                className="text-white text-2xl delay-300 ease-in-out transition-transform"
                onClick={() => setIsDarkMode(!isDarkMode)}
              />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
