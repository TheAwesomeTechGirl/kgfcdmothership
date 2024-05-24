"use client";
import React from "react";
import Link from 'next/link';
import Image from "next/legacy/image";
import maskgroup from "/public/Mask group.svg"; 

function Homepage3() {
  return (
    <div>
       <div className="relative w-full h-screen p-8 flex items-center text-left text-[#F1F1F1]">
        <Image
          src={maskgroup}
          layout="fill"
          objectFit="cover"
          className="opacity-[50.0] bg-black-50"
          alt="studygroup"
        /> 
        <div className="relative z-10 max-w-md mx-4 sm:mx-8 md:mx-16">
          <Link href="/"  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
          PROGRAMS
          </Link>
          <p className="text-sm sm:text-base md:text-lg w-[600px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, 
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
           Nunc viverra imperdiet enim. Fusce est. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage3;
