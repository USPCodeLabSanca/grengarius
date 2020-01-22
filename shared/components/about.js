import React from 'react'

import useFullHeightOnNextDiv from '../full-height'

function PortraitSVG({ width, height }) {
  return (
    <svg
      viewBox='0 0 1 1'
      width={width}
      height={height}
      strokeWidth='0.04'
      fill='transparent'
      stroke='black'
    >
      <circle cx='0.5' cy='0.5' r='0.4666' />
      <circle cx='0.5' cy='0.4' r='0.2' />
      <path
        d='
        M 0.64142135623 0.54142135623
        A 0.3 0.3 0 0 1 0.8299360241 0.8299360241

        M 0.35857864376 0.54142135623
        A 0.3 0.3 0 0 0 0.17006397589 0.8299360241
      '
      />
    </svg>
  )
}

function InfoCard({
  name,
  description,
  imageElem = <PortraitSVG width='120px' height='120px' />,
  borderColor = '#6FB1A5'
}) {
  return (
    <div className='root flex flex-col items-center max-w-smallest'>
      <span className='flex flex-col items-center w-4/5'>
        {imageElem}
        <h2 className='text-center text-2xl font-semibold py-2 border-b-2'>
          {name}
        </h2>
      </span>
      <p className='text-justify pt-6'>{description}</p>
      <style jsx>{`
        .max-w-smallest{
          max-width: 20rem;
        }
        h2 {
          border-color: ${borderColor};
          width 100%;
        }
      `}</style>
    </div>
  )
}

export default function() {
  useFullHeightOnNextDiv()
  return (
    <>
      <div className='flex flex-col items-center w-full pt-16'>
        <h1 className='text-4xl mb-8 py-2 border-b-4'>Sobre nós</h1>
        <p className='leading-relaxed text-base pb-16'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          gravida lorem. Nulla facilisi. Etiam luctus magna a orci iaculis, sit
          amet fringilla purus tristique. Pellentesque bibendum dignissim orci.
          Mauris nibh odio, rutrum quis mauris in, feugiat egestas odio. Sed id
          tincidunt tortor. Vestibulum eu mattis erat, pulvinar commodo
          lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vel gravida lorem. Nulla facilisi. Etiam luctus magna a orci iaculis,
          sit amet fringilla purus tristique. Pellentesque bibendum dignissim
          orci. Mauris nibh odio, rutrum quis mauris in, feugiat egestas odio.
          Sed id tincidunt tortor. Vestibulum eu mattis erat, pulvinar commodo
          lacus.
        </p>
        <ul className='card-list flex items-center justify-between'>
          <li>
            <InfoCard
              name='Diversidade'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida lorem. Nulla facilisi. Etiam luctus magna a orci iaculis, sit amet fringilla purus tristique. Pellentesque bibendum dignissim orci. Mauris nibh odio, rutrum quis mauris in'
              imageElem={<PortraitSVG width='100px' height='100px' />}
            />
          </li>
          <li>
            <InfoCard
              name='União'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida lorem. Nulla facilisi. Etiam luctus magna a orci iaculis, sit amet fringilla purus tristique. Pellentesque bibendum dignissim orci. Mauris nibh odio, rutrum quis mauris in'
              imageElem={<PortraitSVG width='100px' height='100px' />}
            />
          </li>
          <li>
            <InfoCard
              name='Paixão'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida lorem. Nulla facilisi. Etiam luctus magna a orci iaculis, sit amet fringilla purus tristique. Pellentesque bibendum dignissim orci. Mauris nibh odio, rutrum quis mauris in'
              imageElem={<PortraitSVG width='100px' height='100px' />}
            />
          </li>
        </ul>
      </div>
      <style jsx>{`
        ul > li {
          padding: 1rem 1rem;
        }
        p::first-letter {
          padding-left: 2rem;
        }
        h1 {
          text-align: center;
          border-color: #6fb1a5;
        }
        @media (max-width: 768px) {
          .card-list {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  )
}
