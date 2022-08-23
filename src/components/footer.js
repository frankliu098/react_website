import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faComputerMouse,
} from "@fortawesome/free-solid-svg-icons";// import Navbar from "./navbar";

export default function Footer() {
  return (
    <div>
      {" "}
      <div className="bg-gray-400">
        <Navbar />
        <div className="bg-gray-400 h-screen w-screen">Hello</div>
      </div>
    </div>
  );
}

function Navbar() {
  const [click, setClick] = useState(false); // change and update states
  const handleClick = () => setClick(!click); // acts as a toggle
  const closeMobileMenu = () => setClick(false);

  return (
    <nav class="text-gray-900 hover:text-gray-900 flex items-center flex-wrap lg:justify-between p-3 shadow-2xl">
      <div class="text-gray-900 hover:text-gray-900 sm:block sm:visible fill-current">
        <button
          onClick={handleClick}
          className="z-50 transform hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300 fill-current visible lg:hidden mr-4 flex items-center flex-wrap px-3 py-2 shadow-xl rounded"
        >
          <FontAwesomeIcon icon={click ? faXmark : faBars} />
        </button>
      </div>
      <div
        className={
          click
            ? "text-gray-900 hover:text-gray-900 visible flex flex-col space-y-16 justify-center items-center w-screen h-screen z-50 hover:transition-all"
            : "text-gray-900 hover:text-gray-900 z-50 sm:hidden lg:flex lg:items-center w-auto justify-end"
        }
      >
        <div className="">
          <Link
            to="/"
            className={
              click
                ? "text-gray-900 hover:text-gray-900 font-sans font-thin no-underline visible shadow-xl lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300 p-4"
                : "text-gray-900 hover:text-gray-900 no-underline z-50 hidden visible shadow-xl lg:inline-block text-sm px-6 leading-none rounded lg:mt-0 transform overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300"
            }
            onClick={closeMobileMenu}
          >
            Home
          </Link>
        </div>
        <div className="">
          <Link
            to="/about"
            className={
              click
                ? "text-gray-900 hover:text-gray-900 font-sans font-thin no-underline visible shadow-xl lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300 p-4"
                : "text-gray-900 hover:text-gray-900 no-underline z-50 hidden visible shadow-xl lg:inline-block text-sm px-6 leading-none rounded lg:mt-0 transform overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300"
            }
            onClick={closeMobileMenu}
          >
            About
          </Link>
        </div>
        <div className="">
          <Link
            to="/projects"
            className={
              click
                ? "text-gray-900 hover:text-gray-900 font-sans font-thin no-underline visible shadow-xl lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300 p-4"
                : "text-gray-900 hover:text-gray-900 no-underline z-50 hidden visible shadow-xl lg:inline-block text-sm px-6 leading-none rounded lg:mt-0 transform overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300"
            }
            onClick={closeMobileMenu}
          >
            Projects
          </Link>
        </div>
        <div className="">
          <Link
            to="/classes"
            className={
              click
                ? "text-gray-900 hover:text-gray-900 font-sans font-thin no-underline visible shadow-xl lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300 p-4"
                : "text-gray-900 hover:text-gray-900 no-underline z-50 hidden visible shadow-xl lg:inline-block text-sm px-6 leading-none rounded lg:mt-0 transform overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300"
            }
            onClick={closeMobileMenu}
          >
            Classes
          </Link>
        </div>
        <div className="">
          <Link
            to="/footer"
            className={
              click
                ? "text-gray-900 hover:text-gray-900 font-sans font-thin no-underline visible shadow-xl lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300 p-4"
                : "text-gray-900 hover:text-gray-900 no-underline z-50 hidden visible shadow-xl lg:inline-block text-sm px-6 leading-none rounded lg:mt-0 transform overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300"
            }
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
