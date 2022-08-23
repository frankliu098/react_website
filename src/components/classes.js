import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faComputerMouse,
} from "@fortawesome/free-solid-svg-icons"; // import Navbar from "./navbar";

export default function Classes() {
  return (
    <div>
      <div className="bg-gray-200 xs:h-full xs:w-full lg:h-screen lg:w-screen">
        <Navbar />
        <div className="bg-gray-200 h-screen lg:h-fit w-screen lg:flex lg:justify-evenly lg:mt-8 lg:p-14">
          <div className="xs:ml-4 hover:bg-gray-300 xs:p-8 lg:p-20 shadow-2xl rounded hover:z-50 transform hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="xs:p-2 lg:p-10 font-serif font-bold xs:text-4xl lg:text-6xl">
              Fall 2021
            </div>
            <p>
              <a
                href="https://www2.eecs.berkeley.edu/Courses/CS61A/"
                className="font-serif xs:text-base lg:text-lg text-thin text-gray-700 no-underline hover:underline hover:text-gray-700 visited:text-red-600"
                target="_blank"
              >
                The Structure and Interpretation of Computer Programs (CS61A)
              </a>
            </p>
            <p>
              <a
                href="https://www2.eecs.berkeley.edu/Courses/CS197/"
                className="font-serif xs:text-base lg:text-lg text-thin text-gray-700 no-underline hover:underline hover:text-gray-700 visited:text-red-600"
                target="_blank"
              >
                Field Study (COMPSCI 197)
              </a>
            </p>
            <p>
              <a
                href="http://guide.berkeley.edu/courses/nusctx/"
                className="font-serif xs:text-base lg:text-lg text-thin text-gray-700 no-underline hover:underline hover:text-gray-700 visited:text-red-600"
                target="_blank"
              >
                Introduction to Human Nutrition (NUSCTX 10)
              </a>
            </p>
            <p>
              <a
                href="http://guide.berkeley.edu/courses/sociol/"
                className="font-serif xs:text-base lg:text-lg text-thin text-gray-700 no-underline hover:underline hover:text-gray-700 visited:text-red-600"
                target="_blank"
              >
                Principles of Sociology: American Cultures (SOCIOL 3AC)
              </a>
            </p>
            <p>
              <a
                href="http://guide.berkeley.edu/courses/ugba/"
                className="font-serif xs:text-base lg:text-lg text-thin text-gray-700 no-underline hover:underline hover:text-gray-700 visited:text-red-600"
                target="_blank"
              >
                Principles of Business (UGBA 10)
              </a>
            </p>
          </div>
          <div className="xs:ml-4 hover:bg-gray-300 xs:p-8 lg:p-20 shadow-2xl rounded hover:z-50 transform hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="xs:p-2 lg:p-10 font-serif font-bold xs:text-4xl lg:text-6xl">
              Spring 2021
            </div>

            <p>
              <a
                href="http://guide.berkeley.edu/courses/asamst/"
                className="font-serif xs:text-base lg:text-lg text-thin text-gray-700 no-underline hover:underline hover:text-gray-700 visited:text-red-600"
                target="_blank"
              >
                Introduction to the History of Asians in the United States
                (ASAMST 20A)
              </a>
            </p>
            <p>
              <a
                href="https://www2.eecs.berkeley.edu/Courses/CS61B/"
                className="font-serif xs:text-base lg:text-lg text-thin text-gray-700 no-underline hover:underline hover:text-gray-700 visited:text-red-600"
                target="_blank"
              >
                Data Structures (CS61B)
              </a>
            </p>
            <p>
              <a
                href="https://www2.eecs.berkeley.edu/Courses/CS197/"
                className="font-serif xs:text-base lg:text-lg text-thin text-gray-700 no-underline hover:underline hover:text-gray-700 visited:text-red-600"
                target="_blank"
              >
                Field Study (COMPSCI 197 FLD 215)
              </a>
            </p>
            <p>
              <a
                href="https://www2.eecs.berkeley.edu/Courses/CS197/"
                className="font-serif xs:text-base lg:text-lg text-thin text-gray-700 no-underline hover:underline hover:text-gray-700 visited:text-red-600"
                target="_blank"
              >
                Field Study (COMPSCI 197 FLD 232)
              </a>
            </p>
            <p>
              <a
                href="https://www2.eecs.berkeley.edu/Courses/EE16A/"
                className="font-serif xs:text-base lg:text-lg text-thin text-gray-700 no-underline hover:underline hover:text-gray-700 visited:text-red-600"
                target="_blank"
              >
                Designing Information Devices and Systems I (EECS 16A)
              </a>
            </p>
          </div>
          <div className="xs:ml-4 hover:bg-gray-300 xs:p-8 lg:p-20 shadow-2xl rounded hover:z-50 transform hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="xs:p-2 lg:p-10 font-serif font-bold xs:text-4xl lg:text-6xl">
              Fall 2022
            </div>
            <p>
              <a
                href="http://guide.berkeley.edu/courses/legalst/"
                className="font-serif xs:text-base lg:text-lg text-thin text-gray-700 no-underline hover:underline hover:text-gray-700 visited:text-red-600"
                target="_blank"
              >
                Membership and Migration: Empirical and Normative Perspectives
                (LEGALST C134)
              </a>
            </p>
            <p>
              <a
                href="https://www2.eecs.berkeley.edu/Courses/CS70/"
                className="font-serif xs:text-base lg:text-lg text-thin text-gray-700 no-underline hover:underline hover:text-gray-700 visited:text-red-600"
                target="_blank"
              >
                Discrete Mathematics and Probability Theory (COMPSCI 70)
              </a>
            </p>
            <p>
              <a
                href="https://data.berkeley.edu/education/courses/data-8"
                className="font-serif xs:text-base lg:text-lg text-thin text-gray-700 no-underline hover:underline hover:text-gray-700 visited:text-red-600"
                target="_blank"
              >
                Foundations of Data Science (DATA C8)
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer class="bg-gray-200 p-4 rounded-lg md:flex md:items-center md:justify-between md:p-6">
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
    <nav class="text-gray-700 hover:text-gray-700 flex items-center flex-wrap lg:justify-between p-3">
      <div class="text-gray-700 hover:text-gray-700 sm:block sm:visible fill-current">
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
            ? "text-gray-700 hover:text-gray-700 visible flex flex-col space-y-16 justify-center items-center w-screen h-screen z-50 hover:transition-all"
            : "text-gray-700 hover:text-gray-700 z-50 sm:hidden lg:flex lg:items-center w-auto justify-end"
        }
      >
        <div className="">
          <Link
            to="/"
            className={
              click
                ? "text-gray-700 hover:text-gray-700 font-sans font-thin hover:underline no-underline visible lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden p-4"
                : "text-gray-700 hover:text-gray-700 hover:underline no-underline z-50 hidden visible lg:inline-block text-base px-6 leading-none rounded lg:mt-0 transform overflow-hidden"
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
                ? "text-gray-700 hover:text-gray-700 font-sans font-thin hover:underline no-underline visible lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden p-4"
                : "text-gray-700 hover:text-gray-700 hover:underline no-underline z-50 hidden visible lg:inline-block text-base px-6 leading-none rounded lg:mt-0 transform overflow-hidden"
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
                ? "text-gray-700 hover:text-gray-700 font-sans font-thin hover:underline no-underline visible lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden p-4"
                : "text-gray-700 hover:text-gray-700 hover:underline no-underline z-50 hidden visible lg:inline-block text-base px-6 leading-none rounded lg:mt-0 transform overflow-hidden"
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
                ? "text-gray-700 hover:text-gray-700 font-sans font-thin hover:underline no-underline visible lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden p-4"
                : "text-gray-700 hover:text-gray-700 hover:underline no-underline z-50 hidden visible lg:inline-block text-base px-6 leading-none rounded lg:mt-0 transform overflow-hidden"
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
                ? "text-gray-700 hover:text-gray-700 font-sans font-thin hover:underline no-underline visible lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden p-4"
                : "text-gray-700 hover:text-gray-700 hover:underline no-underline z-50 hidden visible lg:inline-block text-base px-6 leading-none rounded lg:mt-0 transform overflow-hidden"
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
