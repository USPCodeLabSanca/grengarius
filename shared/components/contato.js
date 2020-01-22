import React from 'react'

import useFullHeightOnNextDiv from '../full-height'

export default function() {
  useFullHeightOnNextDiv()
  return (
    <>
      <div className='flex flex-col items-center w-full pb-16'>
        <h1 className='text-4xl mb-8 py-2 border-b-4'>Contato</h1>
        <form className='flex flex-col h-full justify-around m-4 max-w-2xl w-4/5'>
          <label htmlFor='email'>Seu email</label>
          <input name='email' type='email' placeholder='Seu email' />

          <label htmlFor='name'>Seu nome</label>
          <input name='name' type='text' placeholder='Seu nome' />

          <label htmlFor='subject'>Assunto</label>
          <input name='subject' type='text' placeholder='Assunto' />

          <label htmlFor='message'>Mensagem</label>
          <textarea
            className='resize-none'
            name='message'
            type='text'
            placeholder='Mensagem'
          />

          <button
            className='w-full my-8 font-bold text-white rounded-lg text-3xl'
            type='submit'
          >
            Enviar
          </button>
        </form>
      </div>
      <style jsx>{`
        h1 {
          border-color: #6fb1a5;
        }
        input,
        textarea {
          border: 1px solid black;
          margin: 1rem 0;
          border: 0px solid black;
          padding: 0.5rem;
          border-radius: 4px;
          font-size: 24px;
          border-bottom-width: 1px;
        }
        input:focus,
        textarea:focus {
          outline: 0;
        }
        label {
          display: none;
        }
        button {
          background: url(../static/images/background.jpg);
        }
      `}</style>
    </>
  )
}
