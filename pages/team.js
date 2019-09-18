import React from "react";

import Head from "../shared/components/head";
import Navbar from "../shared/components/navbar";
import { useFullHeightOnNextDiv } from "../shared/full-height";

function PortraitSVG({width, height}){
  return (
    <svg
      viewBox="0 0 1 1"
      width={width}
      height={height}
      strokeWidth="0.04"
      fill="transparent" stroke="black"
    >
      <circle cx="0.5" cy="0.5" r="0.4666"/>
      <circle cx="0.5" cy="0.4" r="0.2"/>
      <path d="
        M 0.64142135623 0.54142135623
        A 0.3 0.3 0 0 1 0.8299360241 0.8299360241

        M 0.35857864376 0.54142135623
        A 0.3 0.3 0 0 0 0.17006397589 0.8299360241
      "/>
    </svg>
  );
}

function PersonCard({name, description, borderColor = "#6FB1A5"}){
  return (
    <div className="flex flex-col items-center">
      <span className="flex flex-col items-center w-4/5">
        <PortraitSVG width="120px" height="120px"/>
        <h2 className="text-center text-2xl font-semibold border-b-2">{name}</h2>
      </span>
      <p className="text-center">{description}</p>
      <style jsx>{`
        h2 {
          border-color: ${borderColor};
          width 100%;
        }
      `}</style>
    </div>
  );
}

export default function(){
  useFullHeightOnNextDiv();
  const [people, setPeople] = React.useState([
    {
      name: "joao pedro",
      description: "lorem ipsum lorem ipsum",
    }, {
      name: "joao pedro",
      description: "lorem ipsum lorem ipsum",
    }, {
      name: "joao pedro",
      description: "lorem ipsum lorem ipsum",
    }, {
      name: "joao pedro",
      description: "lorem ipsum lorem ipsum",
    }, {
      name: "joao pedro",
      description: "lorem ipsum lorem ipsum",
    }, {
      name: "joao pedro",
      description: "lorem ipsum lorem ipsum",
    }, {
      name: "joao pedro",
      description: "lorem ipsum lorem ipsum",
    }, {
      name: "joao pedro",
      description: "lorem ipsum lorem ipsum",
    },
  ]);
  return (
    <>
      <Head/>
      <Navbar/>
      <main className="w-full">
        <div className="mx-10 h-full bg-white">
          <h1 className="text-5xl">Equipe</h1>
          <ul className="flex flex-wrap p-10">
            {
              people.map((elem, index) => (
                <li key={index} className="mx-12 my-4">
                  <PersonCard
                    description={elem.description}
                    name={elem.name}
                    borderColor={index%2? "#6FB1A5" : "#8B7BDC"}
                  />
                </li>
              ))
            }
          </ul>
        </div>
      </main>
      <style jsx>{`
        main {
          min-height: 100%;
          height: max-content;
          background: url(../static/images/background.jpg);
        }
        h1 {
          text-align: center;
        }
      `}</style>
    </>
  );
}