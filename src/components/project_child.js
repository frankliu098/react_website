import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projects(props) {
  const ref = useRef(null);
  const [button, setButton] = useState("opacity-0");
  const [bgOpacity, setBgOpacity] = useState("hover:opacity-80");

  function playButton() {
    setButton("opacity-100");
  }

  function stopButton() {
    setButton("opacity-0");
  }

  function playBgOpacity() {
    setBgOpacity("hover:opacity-80");
  }

  return (
    <section className="snap-center h-screen flex justify-center items-center relative bg-gray-200">
      <h1 className="text-center sm:text-left bottom-[18rem] text-3xl text-pink drop-shadow-lg sm:left-[62%] sm:bottom-[22rem] 2xl:left-[57%] 2xl:bottom-[32rem] sm:visible sm:text-3xl font-bold tracking-tight leading-tight absolute z-40 italic">{`${props.projectName}`}</h1>
      <h4 className="text-center sm:text-left bottom-[50rem] text-md text-pink drop-shadow-lg sm:left-[27%] sm:bottom-[20rem] 2xl:left-[20%] 2xl:bottom-[30rem] sm:visible sm:text-md font-bold tracking-tight leading-tight absolute z-40 w-[30%]">{`${props.description}`}</h4>
      {/* <h2 className="text-center sm:text-left bottom-[47rem] text-3xl text-lightPink drop-shadow-lg sm:left-[27%] sm:bottom-[27rem] 2xl:left-[25%] 2xl:bottom-[34rem] sm:visible sm:text-4xl font-bold tracking-tight leading-tight absolute z-40">{`${props.link}`}</h2> */}
      <div
        ref={ref}
        className={`${bgOpacity} w-[400px] h-[400px] relative m-5 overflow-hidden bg-white`}
        onMouseOver={playButton}
        onMouseOut={stopButton}
      >
        <div
          className={`transition duration-400 ${button} hover:scale-105 left-[73%] bottom-[5%] sm:left-[73%] sm:bottom-[5%] absolute bg-pink drop-shadow-lg rounded-full w-20 h-20 z-40`}
          onMouseOver={playBgOpacity}
        >
          <a href={props.link} target="_blank">
            <FontAwesomeIcon
              className="text-black text-[2.5rem] z-50 absolute left-[35%] bottom-[25%]"
              icon={faGithub}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
