import { React, useState, useRef } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useScroll } from "framer-motion";
import {
  faBars,
  faXmark,
  faComputerMouse,
} from "@fortawesome/free-solid-svg-icons";
import anova from "./images/anova.JPG";
import art from "./images/art.JPG";
import cupcake from "./images/cupcake.JPG";
import ellie from "./images/ellie.JPG";
import everyone from "./images/everyone.JPG";
import pizza from "./images/pizza.JPG";
import some from "./images/some.JPG";
import tennis from "./images/tennis.JPG";

export default function About() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const [caption, setCaption] = useState("");
  const [opacity, setOpacity] = useState("opacity-0");

  function changeCaption(props) {
    setCaption(props.target.alt);
    setOpacity("opacity-100");
  }

  function closeCaption() {
    setOpacity("opacity-0");
  }

  function helper(props) {
    setTimeout(changeCaption(props), 5000);
  }

  return (
    <div className="font-mono bg-white">
      <Navbar />
      <div className=" bg-white -mt-20">
        <svg
          className="fixed top-12 left-32 -rotate-90 w-28 h-28 stroke-gray-900"
          width="300"
          height="300"
          viewBox="0 0 100 100"
        >
          <circle
            style={{ backgroundColor: "lightblue" }}
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="stroke-gray-900 opacity-0"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="stroke-gray-900"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>
        <ul
          ref={ref}
          className="flex h-[30rem] overflow-x-scroll pt-5 basis-[40rem] mt-40 lg:mx-40"
        >
          <img
            className="transition delay-75 duration-500 hover:shadow-white hover:shadow-2xl hover:z-50"
            onMouseOver={helper}
            onMouseLeave={closeCaption}
            src={anova}
            alt="Berkeley ANova"
          />
          <img
            className="transition delay-75 duration-500 hover:shadow-white hover:shadow-2xl hover:z-50"
            onMouseOver={helper}
            onMouseLeave={closeCaption}
            src={art}
            alt="Visiting the BAMPFA"
          />
          <img
            className="transition delay-75 duration-500 hover:shadow-white hover:shadow-2xl hover:z-50"
            onMouseOver={helper}
            onMouseLeave={closeCaption}
            src={cupcake}
            alt="My cat"
          />
          <img
            className="transition delay-75 duration-500 hover:shadow-white hover:shadow-2xl hover:z-50"
            onMouseOver={helper}
            onMouseLeave={closeCaption}
            src={ellie}
            alt="My second cat"
          />
          <img
            className="transition delay-75 duration-500 hover:shadow-white hover:shadow-2xl hover:z-50"
            onMouseOver={helper}
            onMouseLeave={closeCaption}
            src={some}
            alt="Friends"
          />
          <img
            className="transition delay-75 duration-500 hover:shadow-white hover:shadow-2xl hover:z-50"
            onMouseOver={helper}
            onMouseLeave={closeCaption}
            src={everyone}
            alt="More Friends"
          />
          <img
            className="transition delay-75 duration-500 hover:shadow-white hover:shadow-2xl hover:z-50"
            onMouseOver={helper}
            onMouseLeave={closeCaption}
            src={pizza}
            alt="Pizza with Friends"
          />
          <img
            className="transition delay-75 duration-500 hover:shadow-white hover:shadow-2xl hover:z-50"
            onMouseOver={helper}
            onMouseLeave={closeCaption}
            src={tennis}
            alt="Tennis"
          />
        </ul>
      </div>
      <div
        className={`transition delay-75 duration-500 ${opacity} flex justify-center mt-8 text-2xl`}
      >
        {caption}
      </div>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div class="flex justify-center mt-24 lg:mt-48">
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
    <nav class="text-gray-900 hover:text-gray-900 flex flex-wrap lg:justify-center p-3 ">
      <div class="text-gray-900 hover:text-gray-900 sm:visible fill-current">
        <button
          onClick={handleClick}
          className="ml-3 hover ease-in-out duration-300 z-50 transform fill-current visible lg:hidden flex items-center flex-wrap p-3 shadow-xl rounded"
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
