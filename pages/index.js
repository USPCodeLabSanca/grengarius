import React from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar';
import About from "../shared/components/about";
import Projetos from "../shared/components/projetos";
import Contato from "../shared/components/contato";

function Home(){
  return (
    <div className='root bg-cover bg-center h-full bg-image'>
      <div className='container mx-auto px-4 flex h-full pt-navbar'>
        <div className='flex flex-col justify-center w-full md:w-1/2 text-center'>
          <div>
            <img src='/static/images/logo-text.svg' className='w-full' alt="Grengarius Games" />
          </div>
          <div className='text-white text-3xl my-8'>
            Somos um estúdio índie de jogos com foco na diversidade.
          </div>
          <button className='gradient-index-button text-gray text-4xl mx-8 font-bold py-2 px-4 rounded'>
            Saiba mais
          </button>
        </div>
        <div className='hidden md:flex flex-col justify-center w-1/2 p-8'>
          <img
            src='/static/images/logo.svg'
            className='w-full'
            alt="Grengarius Games Logo"
          />
        </div>
      </div>
      <style jsx>{`
        .root {
          height: max-content;
          min-height: calc(100vh - 58px);
        }
        .pt-navbar {
          padding-top: 58px;
        }
        .bg-image {
          background-image: url(/static/images/background.jpg);
        }
      `}</style>
    </div>
  );
}

export default function(){
  React.useEffect(()=>{
    document.getElementById("__next").style.background = "url(/static/images/background.jpg)";
  }, []);

  return (
    <>
      <Head/>
      <Navbar/>
      <main className="flex flex-col">
        <Home/>
        <span><About/></span>
        <span><Projetos/></span>
        <span><Contato/></span>
      </main>
      <style jsx>{`
      `}</style>
    </>
  );
}
