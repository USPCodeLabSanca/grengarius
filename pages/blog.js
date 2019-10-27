import React from 'react';

import Navbar from '../shared/components/navbar';
import { useFullHeightOnNextDiv } from '../shared/full-height';

function InfoCard({
  name,
  description,
  imgURL = 'https://via.placeholder.com/442x346',
  borderColor = '#6FB1A5'
}) {
  return (
    <div className='root flex flex-col items-center bg-white max-w-smallest'>
      <img src={imgURL} width='442' height='346' />
      <div className='text-container px-4'>
        <h2 className='text-center text-2xl font-semibold border-b-2'>
          {name}
        </h2>
        <p className='my-2'>{description}</p>
      </div>
      <style jsx>{`
        .max-w-smallest{
          max-width: 20rem;
        }
        .text-container {
          width: 288px;
        }
        h2 {
          border-color: ${borderColor};
          width 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        p {
          height: 10rem;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
}

export default function() {
  useFullHeightOnNextDiv();
  const [articles, setArticles] = React.useState([
    {
      name: 'Nome do artigo',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida lorem. Nulla facilisi. Etiam luctus magna a orci iaculis, sit amet fringilla purus tristique. Pellentesque bibendum dignissim orci. Mauris nibh odio, rutrum quis mauris in, feugiat egestas odio. Sed id tincidunt tortor. Vestibulum eu mattis erat, pulvinar commodo lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida lorem. Nulla facilisi. Etiam luctus magna a orci iaculis, sit amet fringilla purus tristique. Pellentesque bibendum dignissim orci. Mauris nibh odio, rutrum quis mauris in, feugiat egestas odio. Sed id tincidunt tortor. Vestibulum eu mattis erat, pulvinar commodo lacus.'
    },
    {
      name: 'Nome do artigo',
      description: 'Descrição do artigo'
    },
    {
      name: 'Nome do artigo',
      description: 'Descrição do artigo'
    },
    {
      name: 'Nome do artigo',
      description: 'Descrição do artigo'
    }
  ]);
  return (
    <>
      <Navbar />
      <main className='py-16'>
        <div className='mx-0 sm:mx-2 md:mx-16 px-4 sm:px-6 md:px-16 bg-white'>
          <div className='py-16'>
            <h1 className='text-5xl pb-8 text-center'>Blog</h1>
            <div className='card-list-container h-full'>
              <ul className='flex items-center justify-center flex-wrap'>
                {articles.map((elem, index) => (
                  <li key={index} className='p-5'>
                    <InfoCard name={elem.name} description={elem.description} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
