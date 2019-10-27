import React from "react";

export default function Hamburguer({isOpen = false, ...props}){
  let topPath;
  let bottomPath;
  let middlePath;

  function startPosition(){
    middlePath.style.strokeDasharray = "0.7 100";
    middlePath.style.strokeDashoffset = "0";
    topPath.style.strokeDasharray = bottomPath.style.strokeDasharray = "0.7 100";
    topPath.style.strokeDashoffset = bottomPath.style.strokeDashoffset = "-0.15";
  }

  function endPosition(){
    middlePath.style.strokeDasharray = "0 100";
    middlePath.style.strokeDashoffset = "-0.35";
    topPath.style.strokeDasharray = bottomPath.style.strokeDasharray = "0.8602325267 100";
    topPath.style.strokeDashoffset = bottomPath.style.strokeDashoffset = "-1.42540928658";
  }
  React.useEffect(()=>isOpen? endPosition() : startPosition(), [isOpen]);

  return (
    <svg {...props} width={50} height={50} viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
      <style jsx>{`
        path{
          fill: none;
          stroke: #359E7D;
          stroke-width: 0.1;
          stroke-linecap: round;
          transition: 0.5s;
        }
        #bottom-path, #top-path {
          stroke-dasharray: 0.7 100;
          stroke-dashoffset: 0;
          stroke-dasharray: 0.7 100;
          stroke-dashoffset: -0.15;
          transition-timing-function: cubic-bezier(0.25, -0.25, 0.75, 1.25), cubic-bezier(0.25, -0.25, 0.75, 1.25);
        }
        #middle-path{
          transition-timing-function: linear;
        }
      `}</style>
      <path ref={elem => topPath = elem} id="top-path" d="M 0 0.25 L 0.15 0.25 h 0.7 a 0.25 0.1 90 1 1 0 0.5 L 0 0.14285714285"/>
      <path ref={elem => middlePath = elem} id="middle-path" d="M 0.15 0.5 h 0.7"/>
      <path ref={elem => bottomPath = elem} id="bottom-path" d="M 0 0.75 L 0.15 0.75 h 0.7 a 0.25 0.1 90 1 0 0 -0.5 L 0 0.85714285714"/>
    </svg>
  );
}