import React from 'react'

import Head from '../shared/components/head'
import About from '../shared/components/about'
import Contato from '../shared/components/contato'
import Team from '../shared/components/team'

function Home() {
  return (
    <div className='root flex items-center bg-cover bg-center h-full bg-image'>
      <div className='container mx-auto px-4 sm:px-6 md:px-16 py-8 flex h-full pt-navbar'>
        <div className='flex flex-col justify-center w-full md:w-1/2 text-center'>
          <div>
            <img
              src='/static/images/logo-text.svg'
              className='w-full'
              alt='Grengarius Games'
            />
          </div>
          <div className='text-lg md:text-2xl lg:text-4xl text-white my-6'>
            Somos um estúdio índie de jogos com foco na diversidade.
          </div>
          <button className='text-normal md:text-lg lg:text-4xl gradient-index-button text-gray  mt-4 mx-16 font-bold py-2 px-4 rounded'>
            Saiba mais
          </button>
        </div>
        <div className='hidden md:flex flex-col justify-center w-1/2 p-8'>
          <img
            src='/static/images/logo.svg'
            className='w-full'
            alt='Grengarius Games Logo'
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
  )
}

export default function() {
  return (
    <>
      <Head />
      <main>
        <Home />
        <div className='bg-cover bg-center bg-image py-16 px-0 sm:px-2 md:px-16'>
          <div className='px-4 sm:px-6 md:px-16 bg-white'>
            <About />
            <Team />
            <Contato />
          </div>
        </div>
      </main>
      <style jsx>{`
        .bg-image {
          background-image: url(/static/images/side.jpg);
        }
      `}</style>
    </>
  )
}
