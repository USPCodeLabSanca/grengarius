import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  componentDidMount(){
    console.log(document.getElementById("__next"));
  }

  render() {
    return (
      <Html lang='pt-br' className="h-full">
        <Head />
        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
