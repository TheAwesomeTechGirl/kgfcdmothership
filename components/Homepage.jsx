import React from "react";
import Image from "next/legacy/image";
import cuteblackbaby from "/public/cuteblackbaby.svg";

function Homepage() {
  return (
    <div>
      <div className="relative w-full h-screen  p-5 flex items-center text-left text-[#F1F1F1]">
        <Image
          src={cuteblackbaby}
          layout="fill"
          objectFit="cover"
          style={{ width: '100%' }}
          className="opacity-[300] bg-black-50"
          alt="Cute Black Baby"
        />

        <div className="absolute z-10 max-w-md mx-4 sm:mx-8 md:mx-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
            OUR MANDATE
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra imperdiet enim. Fusce est.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
