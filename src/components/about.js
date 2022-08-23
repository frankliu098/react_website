import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faComputerMouse,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="bg-red-100 h-full">
      <Navbar />
      <div className=" bg-red-100 text-red-700 hover:text-red-700 h-fit lg:w-screen flex justify-center align-center items-top xl:space-x-20 lg:space-x-16 mt-28 xs:w-fit xs:flex-wrap xs:space-x-0">
        <div className="flex justify-center">
          <div class="h-48 w-48 relative">
            <div class="font-sans font-bold absolute inset-0 h-full w-full text-2xl opacity-100 bg-red-300 rounded-lg shadow-2xl flex items-center justify-center">
              Focused
            </div>
            <div class="transform hover: z-50 hover:translate-y-full hover:scale-125 transition duration-300">
              <div class=" h-full w-full bg-red-200 rounded-lg shadow-2xl">
                <div className="font-serif text-8xl flex items-center justify-center h-48">
                  F
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div class="h-48 w-48 relative">
            <div class="font-sans font-bold absolute inset-0 h-full w-full text-2xl opacity-100 bg-red-300 rounded-lg shadow-2xl flex items-center justify-center">
              Reliable
            </div>
            <div class="transform hover: z-50 hover:translate-y-full hover:scale-125 transition duration-300">
              <div class=" h-full w-full bg-red-200 rounded-lg shadow-2xl">
                <div className="font-serif text-8xl flex items-center justify-center h-48">
                  R
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div class="h-48 w-48 relative">
            <div class="font-sans font-bold absolute inset-0 h-full w-full text-2xl opacity-100 bg-red-300 rounded-lg shadow-2xl flex items-center justify-center">
              Adaptable
            </div>
            <div class="transform hover: z-50 hover:translate-y-full hover:scale-125 transition duration-300">
              <div class=" h-full w-full bg-red-200 rounded-lg shadow-2xl">
                <div className="font-serif text-8xl flex items-center justify-center h-48">
                  A
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div class="h-48 w-48 relative">
            <div class="font-sans font-bold absolute inset-0 h-full w-full text-2xl opacity-100 bg-red-300 rounded-lg shadow-2xl flex items-center justify-center">
              Non-negative
            </div>
            <div class="transform hover: z-50 hover:translate-y-full hover:scale-125 transition duration-300">
              <div class=" h-full w-full bg-red-200 rounded-lg shadow-2xl">
                <div className="font-serif text-8xl flex items-center justify-center h-48">
                  N
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div class="h-48 w-48 relative">
            <div class="font-sans font-bold absolute inset-0 h-full w-full text-2xl opacity-100 bg-red-300 rounded-lg shadow-2xl flex items-center justify-center">
              Knowledgeable
            </div>
            <div class="transform hover: z-50 hover:translate-y-full hover:scale-125 transition duration-300">
              <div class=" h-full w-full bg-red-200 rounded-lg shadow-2xl">
                <div className="font-serif text-8xl flex items-center justify-center h-48">
                  K
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:h-screen w-screen flex justify-center align-center items-top xs:h-fit">
        <div className="text-5xl font-serif text-red-700 items-center text-center m-40">
          Born in the <span className="font-bold">Garden State</span>, I am a{" "}
          <span className="font-bold">student</span>,{" "}
          <span className="font-bold">programmer</span>,{" "}
          <span className="font-bold">tennis enthusiast</span>, and{" "}
          <span className="font-bold">certified foodie</span> seeking new and
          exciting opportunities to work on{" "}
          <span className="font-bold">meaningful</span> projects with{" "}
          <span className="font-bold">technology</span>.
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer class="bg-red-100 p-4 rounded-lg md:flex md:items-center md:justify-between md:p-6">
      <span class="text-base text-gray-500 sm:text-center dark:text-gray-400"></span>
      <ul class="flex flex-wrap items-center mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://github.com/frankliu098"
            class="font-sans hover:underline no-underline mr-4 md:mr-6 text-red-700 hover:text-red-700"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/frank-liu-2133591a3"
            class="font-sans hover:underline no-underline mr-4 md:mr-6 text-red-700 hover:text-red-700"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/frank.liu.56808/"
            class="font-sans hover:underline no-underline mr-4 md:mr-6 text-red-700 hover:text-red-700"
            target="_blank"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/frankliu098/?hl=en"
            class="font-sans hover:underline no-underline text-red-700 hover:text-red-700"
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
    <nav class="text-red-700 hover:text-red-700 flex items-center flex-wrap lg:justify-between p-3">
      <div class="text-red-700 hover:text-red-700 sm:block sm:visible fill-current">
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
            ? "text-red-700 hover:text-red-700 visible flex flex-col space-y-16 justify-center items-center w-screen h-screen z-50 hover:transition-all"
            : "text-red-700 hover:text-red-700 z-50 sm:hidden lg:flex lg:items-center w-auto justify-end"
        }
      >
        <div className="">
          <Link
            to="/"
            className={
              click
                ? "text-red-700 hover:text-red-700 font-sans font-bold hover:underline no-underline visible lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 p-4"
                : "text-red-700 hover:text-red-700 hover:underline no-underline z-50 hidden visible lg:inline-block text-base px-6 leading-none rounded lg:mt-0"
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
                ? "text-red-700 hover:text-red-700 font-sans font-bold hover:underline no-underline visible lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 p-4"
                : "text-red-700 hover:text-red-700 hover:underline no-underline z-50 hidden visible lg:inline-block text-base px-6 leading-none rounded lg:mt-0"
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
                ? "text-red-700 hover:text-red-700 font-sans font-bold hover:underline no-underline visible lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 p-4"
                : "text-red-700 hover:text-red-700 hover:underline no-underline z-50 hidden visible lg:inline-block text-base px-6 leading-none rounded lg:mt-0"
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
                ? "text-red-700 hover:text-red-700 font-sans font-bold hover:underline no-underline visible lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 p-4"
                : "text-red-700 hover:text-red-700 hover:underline no-underline z-50 hidden visible lg:inline-block text-base px-6 leading-none rounded lg:mt-0"
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
                ? "text-red-700 hover:text-red-700 font-sans font-bold hover:underline no-underline visible lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 p-4"
                : "text-red-700 hover:text-red-700 hover:underline no-underline z-50 hidden visible lg:inline-block text-base px-6 leading-none rounded lg:mt-0"
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
