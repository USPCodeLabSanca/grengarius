import React from "react";
import Head from "./head";
import Navbar from "./navbar";
import { useFullHeightOnNextDiv } from "../full-height";

export default function() {
  useFullHeightOnNextDiv();
  return (
    <>
      <div className="root mx-10 h-full flex px-16 flex-col items-center bg-white py-12">
        <span className="flex justify-center">
          <h1 className="text-center text-5xl border-b-4">Contato</h1>
        </span>
        <form className="flex flex-col h-full justify-around m-4 max-w-2xl w-4/5">
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
          font-size: 30px;
          border-bottom-width: 1px;
        }
        input:focus, textarea:focus {
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