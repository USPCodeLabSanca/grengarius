import React from 'react';
import Link from 'next/link';

export default function Navbar(){
  return (
    <header className='bg-gray top-0 w-full h-navbar'>
      <div className='flex justify-center md:justify-start container h-full mx-auto'>
        <div><Link href="/index"><a className='flex items-center px-4'>
          <img src='/static/images/logo-navbar.svg' className='h-10' alt="Grengarius Games Logo" />
          <div className='text-4xl font-bold px-2'>
            <span className='text-secondary'>G</span>
            <span className='text-primary'>G</span>
          </div>
        </a></Link></div>
        <span className='hidden md:block flex-grow' />
        <ul className='hidden md:flex items-center text-secondary text-2xl'>
          <li className='px-4'><Link href="/portfolio"><a>Portfólio</a></Link></li>
          <li className='px-4'><Link href="/projetos"><a>Projetos</a></Link></li>
          <li className='px-4'><Link href="/contato"><a>Contato</a></Link></li>
          <li className='px-4'><Link href="/team"><a>Equipe</a></Link></li>
          <li className='px-4'><Link href="/about"><a>Sobre nós</a></Link></li>
          <li className='px-4'><Link href="/blog"><a>Blog</a></Link></li>
        </ul>
      </div>
      <style jsx>{`
        .h-navbar {
          height: 58px;
        }
      `}</style>
    </header>
  );
}
