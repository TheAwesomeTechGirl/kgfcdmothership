import React from 'react'
import { CiUser } from "react-icons/ci";

// Sample data array
const data = [
  {
    id: 1,
    title: 'TRUSTEES',
    header: 'Maecenas porttitor congue massa' ,
    description: 'Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina'
  },
  {
    id: 2,
    title: 'BOARD OF DIRECTORS',
    header: 'Maecenas porttitor congue massa' ,
    description: 'Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina'
  },
  {
    id: 3,
    title: 'GOVERNING COUNCIL',
    header: 'Maecenas porttitor congue massa' ,
    description: 'Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina'
  },
  {
    id: 4,
    title: 'VOLUNTEERS',
    header: 'Maecenas porttitor congue massa' ,
    description: 'Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina'
  },
  {
    id: 5,
    title: 'SPONSORS',
    header: 'Maecenas porttitor congue massa' ,
    description: 'Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina'
  },
  {
    id: 6,
    title: 'MENTORS',
    header: 'Maecenas porttitor congue massa' ,
    description: 'Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina'
  }
];

const Teamdata = () => {
  return (
    <div className='container grid grid-cols lg:grid-cols-3  mx-auto p-4'>
      {data.map((item) => (
        <div key={item.id} className='p-3  w-full text-left text-[#1E1E1E] lg:w-[270px] mb-6'>
          <CiUser className='bg-[#E3B522] w-full md:w-[249px] h-[224px] text-[#D9D9D9]' />
          <h1 className='bg-[#14BDE3] p-2 text-center w-full md:w-[249px] h-[48px] '>{item.title}</h1>
          <div>
            <h2 className='mt-2 md:mt-3 font-bold text-[13px] leading-[14px] '>{item.header}</h2>
            <p className='mt-2 font-normal text-[13px] leading-[14px] '>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Teamdata;
