import React from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar';
import { useFullHeightOnNextDiv } from '../shared/full-height';

export default function Home(){
  useFullHeightOnNextDiv();
  return (
    <>
      <style>{`
        main{
        }
      `}</style>
      <Head />
      <Navbar />
      <main className="">
        <div className='bg-cover bg-center h-full bg-image'>
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
        </div>
        <style jsx>{`
          .pt-navbar {
            padding-top: 58px;
          }

          .bg-image {
            background-image: url(/static/images/background.jpg);
          }
        `}</style>
      </main>
    </>
  );
}
