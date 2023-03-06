import React from 'react';

export default function Form() {
  return (
    <div className=' max-w-[1240px] mx-auto p-4 h-screen'>
      <h1 className=' text-2xl font-bold text-center p-4'>
        Let's work together
      </h1>
      <form className=' max-w-[600px] m-auto'>
        <div className=' grid grid-cols-2 gap-2'>
          <input
            className=' border shadow-lg p-3'
            type='text '
            placeholder=' Name'
          />
          <input
            className=' border shadow-lg p-3'
            type='email '
            placeholder='Email'
          />
        </div>
        <input
          className=' border shadow-lg p-3 w-full my-4'
          type='text '
          placeholder=' Subject'
        />
        <textarea
          className=' border shadow-lg p-3 w-full'
          placeholder='Message'></textarea>
        <button
          className=' border shadow-lg w-full mt-2 py-1 text-gray-700 
        '>
          Submit
        </button>
      </form>
    </div>
  );
}
