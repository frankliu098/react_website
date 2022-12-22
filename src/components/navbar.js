import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faComputerMouse,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [click, setClick] = useState(false); // change and update states
  const handleClick = () => setClick(!click); // acts as a toggle
  const closeMobileMenu = () => setClick(false);

  return (
    <nav class="font-mono flex items-center flex-wrap lg:justify-between p-3">
      <div class="sm:visible fill-current">
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
      {/* <Link to="/" onClick={closeMobileMenu}>
        <div class="no-underline flex justify-start items-start transform hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300 fill-current visible lg:hidden shadow-xl">
          <span class="no-underline font-semibold text-4xl lg:text-6xl tracking-tight">
            <FontAwesomeIcon icon={faComputerMouse} /> FRANK LIU
          </span>
        </div>{" "}
      </Link> */}
      <div
        className={
          click
            ? "visible flex flex-col space-y-16 justify-center items-center w-screen h-screen z-50 hover:transition-all"
            : "z-50 sm:hidden lg:flex lg:items-center w-auto justify-end"
        }
      >
        <div className="">
          <Link
            to="/"
            className={
              click
                ? "no-underline visible shadow-xl lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300 p-4"
                : "no-underline z-50 hidden visible shadow-xl lg:inline-block text-sm px-6 leading-none rounded lg:mt-0 transform overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300"
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
                ? "no-underline visible shadow-xl lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300 p-4"
                : "no-underline z-50 hidden visible shadow-xl lg:inline-block text-sm px-6 leading-none rounded lg:mt-0 transform overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300"
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
                ? "no-underline visible shadow-xl lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300 p-4"
                : "no-underline z-50 hidden visible shadow-xl lg:inline-block text-sm px-6 leading-none rounded lg:mt-0 transform overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300"
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
                ? "no-underline visible shadow-xl lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300 p-4"
                : "no-underline z-50 hidden visible shadow-xl lg:inline-block text-sm px-6 leading-none rounded lg:mt-0 transform overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300"
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
                ? "no-underline visible shadow-xl lg:inline-block text-4xl leading-none rounded mt-4 lg:mt-0 transform overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300 p-4"
                : "no-underline z-50 hidden visible shadow-xl lg:inline-block text-sm px-6 leading-none rounded lg:mt-0 transform overflow-hidden hover:shadow-2xl transition hover:-translate-y-1 hover:scale-110 duration-300"
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
