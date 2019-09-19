import React from "react";
import Head from "./head";
import Navbar from "./navbar";
import { useFullHeightOnNextDiv } from '../full-height';

function ProjectCard({
  title,
  description,
  imageURL = "https://via.placeholder.com/442x346",
}){
  return (
    <div className="root flex w-full justify-center">
        <img src={imageURL} width="221" height="173"/>
      <div className="text-container flex flex-col w-full ml-4">
        <h2 className="title text-center border-b-2 border-t-2">
          {title}
        </h2>
        <p className="description p-1 border-b-2 h-full">{description}</p>
      </div>
      <style jsx>{`
        .image-container {
          width: "70%";
          height: "auto";
        }
        .title {
          border-color: #9695D1;
          font-size: 30px;
        }
        .description {
          font-size: 20px;
          border-color: #9695D1;
          min-height: 10rem;
          max-height: 116px;
          overflow-y: auto;
        }
        @media (max-width: 768px) {
          .root {
            flex-direction: column;
          }
          .text-container {
            margin-left: 0;
            margin-top: 1rem;
          }
          .image-container {
            width: 100%;
          }
          img {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default function Projetos(){
  useFullHeightOnNextDiv();
  const [projects, setProjects] = React.useState([
    {
      title: "Falling star",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida lorem. Nulla facilisi. Etiam luctus magna a orci iaculis, sit amet fringilla purus tristique. Pellentesque bibendum dignissim orci. Mauris nibh odio, rutrum quis mauris in, feugiat egestas odio. Sed id tincidunt tortor. Vestibulum eu mattis erat, pulvinar commodo lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida lorem. Nulla facilisi. Etiam luctus magna a orci iaculis, sit amet fringilla purus tristique. Pellentesque bibendum dignissim orci. Mauris nibh odio, rutrum quis mauris in, feugiat egestas odio. Sed id tincidunt tortor. Vestibulum eu mattis erat, pulvinar commodo lacus.",
      imageURL: "https://via.placeholder.com/442x346",
    },
    {
      title: "Falling star",
      description: "asdasdadads",
      imageURL: "https://via.placeholder.com/442x346",
    },
    {
      title: "Falling star",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida lorem. Nulla facilisi. Etiam luctus magna a orci iaculis, sit amet fringilla purus tristique. Pellentesque bibendum dignissim orci. Mauris nibh odio, rutrum quis mauris in, feugiat egestas odio. Sed id tincidunt tortor. Vestibulum eu mattis erat, pulvinar commodo lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida lorem. Nulla facilisi. Etiam luctus magna a orci iaculis, sit amet fringilla purus tristique. Pellentesque bibendum dignissim orci. Mauris nibh odio, rutrum quis mauris in, feugiat egestas odio. Sed id tincidunt tortor. Vestibulum eu mattis erat, pulvinar commodo lacus.",
      imageURL: "https://via.placeholder.com/442x346",
    },
  ]);

  return (
    <>
      <div className="mx-10 bg-white h-full px-16 py-12">
        <h1 className="text-5xl text-center">Projetos</h1>
        <ul>
          {
            projects.map((elem, index) =>
            <li key={index} className="py-5"><ProjectCard
              title={elem.title}
              imageURL={elem.imageURL}
              description={elem.description}
            /></li>)
          }
        </ul>
      </div>
    </>
  );
}