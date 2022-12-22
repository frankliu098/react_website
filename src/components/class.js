import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Class(props) {
  return (
    <div className="flex flex-wrap lg:block lg:flex-nowrap bg-gray-200 border-2 border-gray-300 transition duration-500 hover:shadow-2xl hover:scale-110 hover:border-white w-[40%]  rounded-xl p-10">
      <div className="font-bold text-lg lg:text-3xl">{props.className}</div>
      <br></br>
      <div className="text-sm">{props.description}</div>
    </div>
  );
}
