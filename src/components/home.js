import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faComputerMouse,
} from "@fortawesome/free-solid-svg-icons";
// import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className=" bg-gray-200 text-gray-900 hover:text-gray-900 h-screen w-screen flex justify-center align-center items-center">
        <div className="align-center mb-64">
          <div className="font-serif font-bold flex justify-center mb-8 text-center xs:p-8 xs:text-7xl md:text-9xl">
            Frank Liu
          </div>
          <div className="font-sans font-thin flex justify-center text-center xs:text-4xl md:text-6xl">
            CS @ UC Berkeley
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer class="p-4 rounded-lg md:flex md:items-center md:justify-between md:p-6">
      <span class="text-base text-gray-500 sm:text-center dark:text-gray-400"></span>
      <ul class="flex flex-wrap items-center mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://github.com/frankliu098"
            class="font-sans hover:underline no-underline mr-4 md:mr-6 text-gray-900 hover:text-gray-900"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/frank-liu-2133591a3"
            class="font-sans hover:underline no-underline mr-4 md:mr-6 text-gray-900 hover:text-gray-900"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/frank.liu.56808/"
            class="font-sans hover:underline no-underline mr-4 md:mr-6 text-gray-900 hover:text-gray-900"
            target="_blank"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/frankliu098/?hl=en"
            class="font-sans hover:underline no-underline text-gray-900 hover:text-gray-900"
            targe="_blank"
          >
            Instagram
          </a>
        </li>
      </ul>
    </footer>
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
          className="z-50 transform fill-current visible lg:hidden mr-4 flex items-center flex-wrap px-3 py-2 shadow-xl rounded"
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
                ? "text-gray-900 hover:text-gray-900 font-sans font-thin no-underline hover:underline visible lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden p-4"
                : "text-gray-900 hover:text-gray-900 no-underline hover:underline z-50 hidden visible lg:inline-block text-base px-6 leading-none rounded lg:mt-0 transform overflow-hidden"
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
                ? "text-gray-900 hover:text-gray-900 font-sans font-thin no-underline hover:underline visible lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden p-4"
                : "text-gray-900 hover:text-gray-900 no-underline hover:underline z-50 hidden visible lg:inline-block text-base px-6 leading-none rounded lg:mt-0 transform overflow-hidden"
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
                ? "text-gray-900 hover:text-gray-900 font-sans font-thin no-underline hover:underline visible lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden p-4"
                : "text-gray-900 hover:text-gray-900 no-underline hover:underline z-50 hidden visible lg:inline-block text-base px-6 leading-none rounded lg:mt-0 transform overflow-hidden"
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
                ? "text-gray-900 hover:text-gray-900 font-sans font-thin no-underline hover:underline visible lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden p-4"
                : "text-gray-900 hover:text-gray-900 no-underline hover:underline z-50 hidden visible lg:inline-block text-base px-6 leading-none rounded lg:mt-0 transform overflow-hidden"
            }
            onClick={closeMobileMenu}
          >
            Classes
          </Link>
        </div>
        {/* <div className="">
          <Link
            to="/footer"
            className={
              click
                ? "text-gray-900 hover:text-gray-900 font-sans font-thin no-underline hover:underline visible lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden p-4"
                : "text-gray-900 hover:text-gray-900 no-underline hover:underline z-50 hidden visible lg:inline-block text-base px-6 leading-none rounded lg:mt-0 transform overflow-hidden"
            }
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </div> */}
      </div>
    </nav>
  );
}
