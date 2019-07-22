import React from 'react';
import HeadNext from 'next/head';

const Head = props => (
  <HeadNext>
    <meta charSet='UTF-8' />
    <title>Grengarius Games</title>
    <meta
      name='description'
      content='Somos um estúdio índie de jogos com foco na diversidade.'
    />
    <link
      rel='apple-touch-icon'
      sizes='180x180'
      href='/static/favicon/apple-touch-icon.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='32x32'
      href='/static/favicon/favicon-32x32.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='16x16'
      href='/static/favicon/favicon-16x16.png'
    />
    <link rel='manifest' href='/static/manifest.json' />
    <link
      rel='mask-icon'
      href='/static/favicon/safari-pinned-tab.svg'
      color='#2a292a'
    />
    <link rel='shortcut icon' href='/static/favicon/favicon.ico' />
    <meta name='apple-mobile-web-app-title' content='Grengarius Games' />
    <meta name='application-name' content='Grengarius Games' />
    <meta name='msapplication-TileColor' content='#ffffff' />
    <meta
      name='msapplication-config'
      content='/static/favicon/browserconfig.xml'
    />
    <meta name='theme-color' content='#ffffff' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel='stylesheet' href='/static/styles/tailwind.min.css' />
    <link rel='stylesheet' href='/static/styles/style.css' />
  </HeadNext>
);

export default Head;
