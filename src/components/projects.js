import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faComputerMouse,
} from "@fortawesome/free-solid-svg-icons";
import Project from "./project_child";

export default function Projects() {
  const projectList = [
    {
      projectName: "Waylt",
      description:
        "Implemented a fullstack website enabling users to save songs to a personal feed using React, TailwindCSS, MongoDB, and Spotify's Web API.",
      link: "https://github.com/fullstack-decal-group-17/waylt",
    },
    {
      projectName: "Spiritual Topography Map",
      description:
        "SWE Intern @ Indigitous in partnership with Basil Tech. Web Scraped data from 400,000 churches using Python. Created a website hosted on Vercel using React.js and Tailwind CSS.",
      link: "https://spiritual-topography.vercel.app/",
    },
    {
      projectName: "Gitlet",
      description:
        "Implementing a version-control system that mimics some of the basic features of the popular system Git from scratch.",
      link: "https://sp21.datastructur.es/materials/proj/proj2/proj2#detailed-spec-of-behavior",
    },
    {
      projectName: "Ataxx",
      description:
        "Ataxx is a two-person game played with red and blue pieces on a 7-by-7 board.",
      link: "https://inst.eecs.berkeley.edu/~cs61b/sp22/materials/proj/proj2/index.html",
    },
    {
      projectName: "Scheme",
      description:
        "Developing an interpreter for a subset of the Scheme language from scratch.",
      link: "https://inst.eecs.berkeley.edu/~cs61a/fa21/proj/scheme/",
    },
    {
      projectName: "Enigma",
      description:
        "Mimicking the functionality of the Enigma machines that Germany used during World War II to encrypt its military communications from scratch.",
      link: "https://inst.eecs.berkeley.edu/~cs61b/sp22/materials/proj/proj1/index.html",
    },
  ];

  return (
    <div>
      <div className="font-mono bg-gray-200 h-screen">
        <Navbar />
        <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll sm:-mt-24">
          {projectList.map((feed) => (
            <Project
              projectName={feed.projectName}
              description={feed.description}
              link={feed.link}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div class="flex justify-center -mt-14 bg-gray-200">
      <footer class="p- rounded-lg md:flex md:items-center md:justify-between md:p-6">
        <span class="text-base text-gray-500 sm:text-center dark:text-gray-400"></span>
        <ul class="flex flex-wrap items-center mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://github.com/frankliu098"
              class="hover:underline no-underline mr-4 md:mr-6 text-gray-900 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/frank-liu-2133591a3"
              class="hover:underline no-underline mr-4 md:mr-6 text-gray-900 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/frank.liu.56808/"
              class="hover:underline no-underline mr-4 md:mr-6 text-gray-900 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/frankliu098/?hl=en"
              class="hover:underline no-underline text-gray-900 hover:text-gray-900"
              targe="_blank"
            >
              Instagram
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

function Navbar() {
  const [click, setClick] = useState(false); // change and update states
  const handleClick = () => setClick(!click); // acts as a toggle
  const closeMobileMenu = () => setClick(false);

  return (
    <nav class="text-gray-900 hover:text-gray-900 flex flex-wrap lg:justify-center p-3">
      <div class="text-gray-900 hover:text-gray-900 sm:visible fill-current">
        <button
          onClick={handleClick}
          className="ml-3 hover:scale-125 ease-in-out duration-300 z-50 transform fill-current visible lg:hidden flex items-center flex-wrap p-3 shadow-xl rounded"
        >
          <FontAwesomeIcon
            className="w-9 h-9"
            icon={click ? faXmark : faBars}
          />
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
                ? "text-gray-900 hover:text-gray-900 no-underline hover:underline visible lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden p-4"
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
                ? "text-gray-900 hover:text-gray-900 no-underline hover:underline visible lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden p-4"
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
                ? "text-gray-900 hover:text-gray-900 no-underline hover:underline visible lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden p-4"
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
                ? "text-gray-900 hover:text-gray-900 no-underline hover:underline visible lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden p-4"
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
                ? "text-gray-900 hover:text-gray-900 no-underline hover:underline visible lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden p-4"
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
