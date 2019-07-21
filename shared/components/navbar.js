import React from 'react';

const Navbar = () => (
  <header className='bg-gray fixed top-0 w-screen h-navbar'>
    <div className='flex justify-center md:justify-start container h-full mx-auto'>
      <div className='flex items-center px-4'>
        <img src='/static/images/logo.png' className='h-10' />
        <div className='text-4xl font-bold px-2'>
          <span className='text-secondary'>G</span>
          <span className='text-primary'>G</span>
        </div>
      </div>
      <span className='hidden md:block flex-grow' />
      <ul className='hidden md:flex items-center text-secondary text-2xl'>
        <li className='px-4'>Portfólio</li>
        <li className='px-4'>Projetos</li>
        <li className='px-4'>Contato</li>
      </ul>
    </div>
    <style jsx>{`
      .h-navbar {
        height: 58px;
      }
    `}</style>
  </header>
);

export default Navbar;
