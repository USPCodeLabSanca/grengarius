import React from 'react';
import HeadNext from 'next/head';

const Head = props => (
  <HeadNext>
    <meta charSet='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel='stylesheet' href='/static/styles/tailwind.min.css' />
    <link rel='stylesheet' href='/static/styles/style.css' />
  </HeadNext>
);

export default Head;
