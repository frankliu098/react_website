import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faComputerMouse,
} from "@fortawesome/free-solid-svg-icons"; // import Navbar from "./navbar";
import Class from "./class";

export default function Classes() {
  const fa21 = [
    {
      name: "The Structure and Interpretation of Computer Programs",
      description:
        "An introduction to programming and computer science focused on abstraction techniques as means to manage program complexity. Techniques include procedural abstraction; control abstraction using recursion, higher-order functions, generators, and streams; data abstraction using interfaces, objects, classes, and generic operators; and language abstraction using interpreters and macros. The course exposes students to programming paradigms, including functional, object-oriented, and declarative approaches. It includes an introduction to asymptotic analysis of algorithms. There are several significant programming projects.",
    },
    {
      name: "Principles of Business",
      description:
        "This team-taught course provides an introduction to the study of the modern business enterprise. It consists of four modules, the order of which may vary from semester to semester, and an online business simulation that runs during most of the semester. The four modules cover: Finance & Accounting, Marketing, Operations & Sustainability, and Leadership.",
    },
    {
      name: "Principles of Sociology: American Cultures",
      description:
        "Comparing the experience of three out of five ethnic groups (e.g. African Americans, Asian Americans, Chicano/Latino, European Americans, and Native Americans) we shall examine historically how each people entered American society and built communities and transformed their cultures in the process. Students will be introduced to the sociological perspective, characteristic methods of research, and such key concepts as culture, community, class, race, social change, and social movements.",
    },
    {
      name: "Introduction to Human Nutrition",
      description:
        "This course focuses on relationships between diet and health, and responses of the human body to diet and food components, including macro and micro nutrients, water, phytochemicals, and alcohol. ",
    },
    {
      name: "Field Study",
      description:
        "Students take part in organized individual field sponsored programs with off-campus companies or tutoring/mentoring relevant to specific aspects and applications of computer science on or off campus.",
    },
  ];
  const sp22 = [
    {
      name: "Data Structures",
      description:
        "Fundamental dynamic data structures, including linear lists, queues, trees, and other linked structures; arrays strings, and hash tables. Storage management. Elementary principles of software engineering. Abstract data types. Algorithms for sorting and searching. Introduction to the Java programming language.",
    },
    {
      name: "Designing Information Devices and Systems I",
      description:
        "This course and its follow-on course EECS16B focus on the fundamentals of designing modern information devices and systems that interface with the real world. Together, this course sequence provides a comprehensive foundation for core EECS topics in signal processing, learning, control, and circuit design while introducing key linear-algebraic concepts motivated by application contexts. Modeling is emphasized in a way that deepens mathematical maturity, and in both labs and homework, students will engage computationally, physically, and visually with the concepts being introduced in addition to traditional paper/pencil exercises. The courses are aimed at entering students as well as non-majors seeking a broad foundation for the field.",
    },
    {
      name: "Introduction to the History of Asians in the United States",
      description:
        "Introductory comparative analysis of the Asian American experience from 1848 to present. Topics include an analysis of the Asian American perspective; cultural roots; immigration and settlement patterns; labor, legal, political, and social history.",
    },
    {
      name: "Field Study",
      description:
        "Students take part in organized individual field sponsored programs with off-campus companies or tutoring/mentoring relevant to specific aspects and applications of computer science on or off campus.",
    },
    {
      name: "Field Study",
      description:
        "Students take part in organized individual field sponsored programs with off-campus companies or tutoring/mentoring relevant to specific aspects and applications of computer science on or off campus.",
    },
  ];
  const fa22 = [
    {
      name: "Discrete Mathematics and Probability Theory",
      description:
        "Logic, infinity, and induction; applications include undecidability and stable marriage problem. Modular arithmetic and GCDs; applications include primality testing and cryptography. Polynomials; examples include error correcting codes and interpolation. Probability including sample spaces, independence, random variables, law of large numbers; examples include load balancing, existence arguments, Bayesian inference.",
    },
    {
      name: "Foundations of Data Science",
      description:
        "Foundations of data science from three perspectives: inferential thinking, computational thinking, and real-world relevance. Given data arising from some real-world phenomenon, how does one analyze that data so as to understand that phenomenon? The course teaches critical concepts and skills in computer programming and statistical inference, in conjunction with hands-on analysis of real-world datasets, including economic data, document collections, geographical data, and social networks. It delves into social and legal issues surrounding data analysis, including issues of privacy and data ownership.",
    },
    {
      name: "Directed Group Studies for Advanced Undergraduates",
      description:
        "Web Development at Berkeley's Introduction to Full Stack Development. Covered the basics of web development, how the internet works, and the frameworks, technologies, and best practices that are used in the industry today. Final project consisted of creating a fullstack web application.",
    },
    {
      name: "Membership and Migration: Empirical and Normative Perspectives",
      description:
        "Exploring questions about migration and membership in the contemporary world by drawing on empirical and normative perspectives.",
    },
    {
      name: "Field Study",
      description:
        "Students take part in organized individual field sponsored programs with off-campus companies or tutoring/mentoring relevant to specific aspects and applications of computer science on or off campus.",
    },
  ];

  return (
    <div className="h-full bg-gray-200">
      <div className="font-mono">
        <Navbar />
        <div className="h-full 2xl:mx-52">
          <div className="gap-3">
            <div className="flex justify-center flex-wrap text-5xl mt-24 mb-14">
              Fall 2022
            </div>
            <div className="flex justify-center flex-wrap gap-10">
              {fa22.map((feed) => (
                <Class className={feed.name} description={feed.description} />
              ))}
            </div>
          </div>
          <div className="gap-3">
            <div className="flex justify-center flex-wrap text-5xl mt-24 mb-14">
              Spring 2022
            </div>
            <div className="flex justify-center flex-wrap gap-10">
              {sp22.map((feed) => (
                <Class className={feed.name} description={feed.description} />
              ))}
            </div>
          </div>
          <div className="gap-3">
            <div className="flex justify-center flex-wrap text-5xl mt-24 mb-14">
              Fall 2021
            </div>
            <div className="flex justify-center flex-wrap gap-10">
              {fa21.map((feed) => (
                <Class className={feed.name} description={feed.description} />
              ))}
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
    <div class="flex justify-center mt-20 bg-gray-200">
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
    <nav class="text-gray-900 hover:text-gray-900 flex lg:justify-center p-3">
      <div class="text-gray-900 hover:text-gray-900 sm:visible fill-current">
        <button
          onClick={handleClick}
          className="ml-3 hover:scale-125 ease-in-out duration-300 z-50 transform fill-current visible lg:hidden flex items-center p-3 shadow-xl rounded"
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
