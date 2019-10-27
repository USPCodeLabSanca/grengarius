import App from "next/app"

export default class MyApp extends App{
  render({Component, pageProps}){
    return (
      <Component {...pageProps}/>
    );
  }
}