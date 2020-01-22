import React from 'react'

import App from 'next/app'

import Navbar from '../shared/components/navbar'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    )
  }
}
