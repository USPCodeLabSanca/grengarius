import React from 'react';
import Navbar from '../shared/components/navbar';
import Projetos from '../shared/components/projetos';

export default function() {
  return (
    <>
      <Navbar />
      <main className='py-16'>
        <div className='mx-0 sm:mx-2 md:mx-16 px-4 sm:px-6 md:px-16 bg-white'>
          <Projetos />
        </div>
      </main>
      <style jsx>{`
        main {
          height: max-content;
          background: url(../static/images/background.jpg);
        }
        main > div {
          min-height: calc(100vh - 58px);
        }
      `}</style>
    </>
  );
}
