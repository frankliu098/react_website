import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faComputerMouse,
} from "@fortawesome/free-solid-svg-icons";
import stm from "./images/stm.jpg";

export default function Projects() {
  return (
    <div>
      <div className="bg-red-200">
        <Navbar />
        <div className="bg-red-200 h-full w-screen grid grid-cols-2 gap-0 grid-rows-3 p-12 md:gap-0 md:p-12 lg:grid-cols-4 lg:gap-8 lg:grid-rows-3 lg:p-12 ">
          <div class="p-8 m-10 max-w-lg rounded overflow-hidden shadow-lg bg-red-300 hover:z-50 transform hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 hover:bg-red-300 duration-300 lg:col-start-2 lg:row-span-1">
            {/* <img class="w-full" src={stm} alt="Spiritual Topography Map" /> */}
            <div class="px-6 py-4">
              <div class="text-pink-900 font-serif font-bold text-3xl mb-2">
                Spiritual Topography Map
              </div>
              <p class="text-pink-700 text-base font-sans">
                SWE Intern @{" "}
                <a
                  className="text-red-900 no-underline hover:underline hover:text-red-900"
                  href="https://indigitous.org/"
                  target="_blank"
                >
                  Indigitous
                </a>{" "}
                in partnership with{" "}
                <a
                  className="text-red-900 no-underline hover:underline hover:text-red-900"
                  href="https://www.basiltech.org/"
                  target="_blank"
                >
                  Basil Tech.
                </a>
                . Web Scraped data from 400,000 churches using Python. Created a
                website hosted on Vercel using React.js and Tailwind CSS.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-pink-900 mr-2 mb-2">
                #React
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-pink-900 mr-2 mb-2">
                #TailwindCSS
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-pink-900 mr-2 mb-2">
                #STM
              </span>
            </div>
          </div>
          <div class="p-8 m-10 max-w-lg rounded overflow-hidden shadow-lg bg-red-300 hover:z-50 transform hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 hover:bg-red-300 duration-300 lg:col-start-3 lg:row-span-1">
            {/* <img class="w-full" src={stm} alt="Spiritual Topography Map" /> */}
            <div class="px-6 py-4">
              <div class="text-pink-900 font-serif font-bold text-3xl mb-2">
                Gitlet
              </div>
              <p class="text-pink-700 text-base font-sans">
                Implementing a version-control system that mimics some of the
                basic features of the popular system Git (
                <a
                  className="text-red-900 no-underline hover:underline hover:text-red-900"
                  href="https://sp21.datastructur.es/materials/proj/proj2/proj2#detailed-spec-of-behavior"
                  target="_blank"
                >
                  Project Spec
                </a>
                ) from scratch.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-pink-900 mr-2 mb-2">
                #Git
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-pink-900 mr-2 mb-2">
                #absoluteandrelativepaths
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-pink-900 mr-2 mb-2">
                #serializing&deserializing
              </span>
            </div>
          </div>
          <div class="p-8 m-10 max-w-lg rounded overflow-hidden shadow-lg bg-red-300 hover:z-50 transform hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 hover:bg-red-300 duration-300 lg:col-start-2 lg:row-span-1">
            {/* <img class="w-full" src={stm} alt="Spiritual Topography Map" /> */}
            <div class="px-6 py-4">
              <div class="text-pink-900 font-serif font-bold text-3xl mb-2">
                Ataxx
              </div>
              <p class="text-pink-700 text-base font-sans">
                Ataxx is a two-person game played with red and blue pieces on a
                7-by-7 board (
                <a
                  className="text-red-900 no-underline hover:underline hover:text-red-900"
                  href="https://inst.eecs.berkeley.edu/~cs61b/sp22/materials/proj/proj2/index.html"
                  target="_blank"
                >
                  Project Spec
                </a>
                ).
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-pink-900 mr-2 mb-2">
                #linearizedindicies
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-pink-900 mr-2 mb-2">
                #GUI
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-pink-900 mr-2 mb-2">
                #minimaxalgorithm
              </span>
            </div>
          </div>
          <div class="p-8 m-10 max-w-lg rounded overflow-hidden shadow-lg bg-red-300 hover:z-50 transform hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 hover:bg-red-300 duration-300 lg:col-start-3 lg:row-span-1">
            {/* <img class="w-full" src={stm} alt="Spiritual Topography Map" /> */}
            <div class="px-6 py-4">
              <div class="text-pink-900 font-serif font-bold text-3xl mb-2">
                Scheme
              </div>
              <p class="text-pink-700 text-base font-sans">
                Developing an interpreter for a subset of the Scheme language (
                <a
                  className="text-red-900 no-underline hover:underline hover:text-red-900"
                  href="https://inst.eecs.berkeley.edu/~cs61a/fa21/proj/scheme/"
                  target="_blank"
                >
                  Project Spec
                </a>
                ) from scratch.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-pink-900 mr-2 mb-2">
                #functionalprogramming
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-pink-900 mr-2 mb-2">
                #atomic&call expressions
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-pink-900 mr-2 mb-2">
                #symbolic programming
              </span>
            </div>
          </div>
          <div class="p-8 m-10 max-w-lg rounded overflow-hidden shadow-lg bg-red-300 hover:z-50 transform hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 hover:bg-red-300 duration-300 lg:col-start-2 lg:row-span-1">
            {/* <img class="w-full" src={stm} alt="Spiritual Topography Map" /> */}
            <div class="px-6 py-4">
              <div class="text-pink-900 font-serif font-bold text-3xl mb-2">
                Enigma
              </div>
              <p class="text-pink-700 text-base font-sans">
                Mimicing the functionality of the Enigma machines that Germany
                used during World War II to encrypt its military communications
                (
                <a
                  className="text-red-900 no-underline hover:underline hover:text-red-900"
                  href="https://inst.eecs.berkeley.edu/~cs61b/sp22/materials/proj/proj1/index.html"
                  target="_blank"
                >
                  Project Spec
                </a>
                ) from scratch.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-pink-900 mr-2 mb-2">
                #substitutioncipher
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-pink-900 mr-2 mb-2">
                #permutations
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-pink-900 mr-2 mb-2">
                #testing&debugging
              </span>
            </div>
          </div>
          <div class="p-8 m-10 max-w-lg rounded overflow-hidden shadow-lg bg-red-300 hover:z-50 transform hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 hover:bg-red-300 duration-300 lg:col-start-3 lg:row-span-1">
            {/* <img class="w-full" src={stm} alt="Spiritual Topography Map" /> */}
            <div class="px-6 py-4">
              <div class="text-pink-900 font-serif font-bold text-3xl mb-2">
                Portfolio
              </div>
              <p class="text-pink-700 text-base font-sans">
                <a
                  className="text-red-900 no-underline hover:underline hover:text-red-900"
                  href="https://frankliu098.github.io/portfolio/"
                  target="_blank"
                >
                  Personal Website
                </a>
                .
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-pink-900 mr-2 mb-2">
                #HTML
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-pink-900 mr-2 mb-2">
                #CSS
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-pink-900 mr-2 mb-2">
                #youtubevideos
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer class="bg-red-200 p-4 rounded-lg md:flex md:items-center md:justify-between md:p-6">
      <span class="text-base text-gray-500 sm:text-center dark:text-gray-400"></span>
      <ul class="flex flex-wrap items-center mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://github.com/frankliu098"
            class="font-sans hover:underline no-underline mr-4 md:mr-6 text-pink-900 hover:text-pink-900"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/frank-liu-2133591a3"
            class="font-sans hover:underline no-underline mr-4 md:mr-6 text-pink-900 hover:text-pink-900"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/frank.liu.56808/"
            class="font-sans hover:underline no-underline mr-4 md:mr-6 text-pink-900 hover:text-pink-900"
            target="_blank"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/frankliu098/?hl=en"
            class="font-sans hover:underline no-underline text-pink-900 hover:text-pink-900"
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
    <nav class="text-pink-900 hover:text-pink-900 flex items-center flex-wrap lg:justify-between p-3">
      <div class="text-pink-900 hover:text-pink-900 sm:block sm:visible fill-current">
        <button
          onClick={handleClick}
          className="z-50 transforn fill-current visible lg:hidden mr-4 flex items-center flex-wrap px-3 py-2 shadow-xl rounded"
        >
          <FontAwesomeIcon icon={click ? faXmark : faBars} />
        </button>
      </div>
      <div
        className={
          click
            ? "text-pink-900 hover:text-pink-900 visible flex flex-col space-y-16 justify-center items-center w-screen h-screen z-50 hover:transition-all"
            : "text-pink-900 hover:text-pink-900 z-50 sm:hidden lg:flex lg:items-center w-auto justify-end"
        }
      >
        <div className="">
          <Link
            to="/"
            className={
              click
                ? "text-pink-900 hover:text-pink-900 font-sans no-underline hover:underline lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden p-4"
                : "text-pink-900 hover:text-pink-900 no-underline hover:underline z-50 hidden lg:inline-block text-base px-6 leading-none rounded lg:mt-0 transform overflow-hidden"
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
                ? "text-pink-900 hover:text-pink-900 font-sans no-underline hover:underline lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden p-4"
                : "text-pink-900 hover:text-pink-900 no-underline hover:underline z-50 hidden lg:inline-block text-base px-6 leading-none rounded lg:mt-0 transform overflow-hidden"
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
                ? "text-pink-900 hover:text-pink-900 font-sans no-underline hover:underline lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden p-4"
                : "text-pink-900 hover:text-pink-900 no-underline hover:underline z-50 hidden lg:inline-block text-base px-6 leading-none rounded lg:mt-0 transform overflow-hidden"
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
                ? "text-pink-900 hover:text-pink-900 font-sans no-underline hover:underline lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden p-4"
                : "text-pink-900 hover:text-pink-900 no-underline hover:underline z-50 hidden lg:inline-block text-base px-6 leading-none rounded lg:mt-0 transform overflow-hidden"
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
                ? "text-pink-900 hover:text-pink-900 font-sans no-underline hover:underline lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden p-4"
                : "text-pink-900 hover:text-pink-900 no-underline hover:underline z-50 hidden lg:inline-block text-base px-6 leading-none rounded lg:mt-0 transform overflow-hidden"
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
