import React from "react";
import Head from "../shared/components/head";
import Navbar from "../shared/components/navbar";
import { useFullHeightOnNextDiv } from '../shared/full-height';

function ProjectCard({
  title,
  description,
  imageURL,
}){
  return (
    <div className="root">
      <style jsx>{`
        .root {
          display: flex;
          width: 100%;
          justify-content: center;
        }
        .image-container {
          width: "70%";
          height: "auto";
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .text-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-left: 1rem;
        }
        .title {
          border: 2px solid #9695D1;
          border-left-width: 0;
          border-right-width: 0;
          font-size: 30px;
          text-align: center;
        }
        .description {
          font-size: 20px;
          padding: 1rem;
          border-color: #9695D1;
          border-bottom-width: 2px;
          height: 100%;
          min-height: 10rem;
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

      <div className="image-container">
        <img src={imageURL} width="442" height="346"/>
      </div>
      <div className="text-container">
        <h2 className="title">
          {title}
        </h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default function Projetos(){
  useFullHeightOnNextDiv();
  const [projects, setProjects] = React.useState([
    {
      title: "Falling star",
      description: "lorem ipsum",
      imageURL: "http://place-puppy.com/442x346",
    },
    {
      title: "Falling star",
      description: "lorem ipsum",
      imageURL: "http://place-puppy.com/442x346",
    },
    {
      title: "Falling star",
      description: "lorem ipsum",
      imageURL: "http://place-puppy.com/442x346",
    },
  ]);

  return (
    <>
      <Head/>
      <Navbar/>
      <main
        style={{
          background: "url(../static/images/background.jpg)",
          minHeight: "100%",
          height: "max-content",
        }}
        className="overflow-y-scroll w-full"
      >
        <div className="mx-10 bg-white h-full">
          <h1 className="text-5xl text-center font-bold">Projetos</h1>
          <ul className="p-8">
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
      </main>
    </>
  );
}