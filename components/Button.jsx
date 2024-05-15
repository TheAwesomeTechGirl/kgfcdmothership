'use client'; 
import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button type="button" onClick={onClick} className='bg-[#14BDE3] text-[#1D1D1D] rounded-full p-[8px] w-[200px] h-[40px] justify-center items-center'>
      {text}
    </button>
  );
};

export default Button;

