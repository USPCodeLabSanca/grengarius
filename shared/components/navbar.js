import React from 'react';
import Link from 'next/link';
import Router from "next/router";
import Hamburguer from "./hamburguer";

function NavbarListItem({label, href, onClick=(()=>{}), ...props}){
  function click(){
    onClick();
    Router.push(href);
  }

  return (
    <div {...props} onClick={click} className="root w-full">
      <Link href={href}>
        <a>{label}</a>
      </Link>
      <style jsx>{`
        .root{
          background-color: rgb(42, 41, 42);
          transition: 200ms;
          color: white;
          padding: 1rem 2rem;
          text-align: center;
          cursor: pointer;
        }
        .root:hover, .root:focus{
          background-color: rgb(52, 61, 52);
        }
      `}</style>
    </div>
  );
}

function NavbarSlider({isOpen = false, onRequestClose = (()=>{})}){
  const [rootWidth, setRootWidth] = React.useState(null);
  let rootRef = React.useRef();

  React.useEffect(()=>{
    if(!isOpen) return;
    const documentClick = event => {
      const targetElement = event.target;
      for(let element = targetElement; element != null; element = element.parentElement)
        if(element == rootRef.current) return;
      onRequestClose();
    }
    document.addEventListener("click", documentClick);
    return ()=>document.removeEventListener("click", documentClick);
  }, [isOpen]);

  React.useEffect(() => {
    const onResize = () => setRootWidth(rootRef.current.clientWidth);
    window.addEventListener("resize", onResize);
    onResize();
    return ()=>window.removeEventListener("resize", onResize);
  }, [rootRef.current]);

  return (<>
    <div ref={rootRef} className="root">
      <ul>
        <li><NavbarListItem onClick={onRequestClose} href={"/portfolio"} label={"Portfolio"}/></li>
        <li><NavbarListItem onClick={onRequestClose} href={"/blog"} label={"Blog"}/></li>
      </ul>
    </div>
    <style jsx>{`
      .root {
        position: fixed;
        left: ${isOpen? "0" : (rootWidth? `-${rootWidth + 1}px` : `-100%`)};
        top: 60px;
        transition: 500ms;
        height: calc(100vh - 60px);
        background-color: rgb(42, 41, 42);
      }
    `}</style>
  </>);
}

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className='bg-gray sticky top-0 shadow-md h-navbar'>
      <NavbarSlider onRequestClose={()=>setIsOpen(false)} isOpen={isOpen} />
      <div className='flex justify-between mx-2 md:mx-0 md:justify-start h-full'>
        <div className='flex items-center'>
          <Link href='/index'>
            <a className='flex items-center px-4'>
              <img
                src='/static/images/logo-navbar.svg'
                className='h-10'
                alt='Grengarius Games Logo'
              />
              <div className='text-4xl font-bold px-2'>
                <span className='text-secondary'>G</span>
                <span className='text-primary'>G</span>
              </div>
            </a>
          </Link>
        </div>
        <span className='hidden md:block flex-grow' />
        <ul className='hidden md:flex items-center text-secondary text-2xl'>
          <li className='px-4'>
            <Link href='/portfolio'>
              <a>Portfólio</a>
            </Link>
          </li>
          {/* <li className='px-4'><Link href="/projetos"><a>Projetos</a></Link></li> */}
          {/* <li className='px-4'><Link href="/contato"><a>Contato</a></Link></li> */}
          {/* <li className='px-4'><Link href="/team"><a>Equipe</a></Link></li> */}
          {/* <li className='px-4'><Link href="/about"><a>Sobre nós</a></Link></li> */}
          <li className='px-4'>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
        </ul>
        <div className='block md:hidden flex items-center'>
          {/*Hamburguer!*/}
          <Hamburguer isOpen={isOpen} onClick={()=>setIsOpen(e => !e)}/>
        </div>
      </div>
      <style jsx>{`
        .h-navbar {
          height: 60px;
        }
      `}</style>
    </header>
  );
}
