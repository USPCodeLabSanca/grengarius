import Document, { Html, Head, Main, NextScript } from 'next/document';
import MyHead from "../shared/components/head";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='pt-br' className="h-full">
        <Head>
          <MyHead/>
        </Head>
        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
