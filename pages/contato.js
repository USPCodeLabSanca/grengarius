import React from "react";
import Head from "../shared/components/head";
import Navbar from "../shared/components/navbar";
import { useFullHeightOnNextDiv } from "../shared/full-height";

export default function() {
  useFullHeightOnNextDiv();
  return (
    <>
      <Head/>
      <Navbar/>
      <main className="w-full" style={{background: "url(../static/images/background.jpg)"}}>
        <div className="mx-10 h-full flex flex-col items-center justify-center content-center bg-white">
          <span className="flex justify-center">
            <h1 className="text-center text-5xl border-b-4">Contato</h1>
          </span>
          <form className="flex flex-col m-4 max-w-lg w-4/5">
            <label htmlFor="email">Seu email</label>
            <input name="email" type="email" placeholder="Seu email"/>

            <label htmlFor="name">Seu nome</label>
            <input name="name" type="text" placeholder="Seu nome"/>

            <label htmlFor="subject">Assunto</label>
            <input name="subject" type="text" placeholder="Assunto"/>

            <label htmlFor="message">Mensagem</label>
            <textarea className="resize-none" name="message" type="text" placeholder="Mensagem"/>

            <button className="w-full font-bold text-white rounded-lg text-5xl" type="submit">Enviar</button>
          </form>
        </div>
      </main>
      <style jsx>{`
        h1 {
          border-color: #6FB1A5;
          width: max-content;
        }
        input, textarea {
          border: 1px solid black;
          margin: 1rem 0;
          border: 0px solid black;
          padding: 0.5rem;
          border-radius: 4px;
          border-bottom-width: 1px;
        }
        input:focus {
          outline: 0;
        }
        label {
          display: none;
        }
        button{
          background: url(../static/images/background.jpg);
        }
      `}</style>
    </>
  );
}