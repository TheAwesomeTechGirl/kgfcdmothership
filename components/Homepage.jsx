import React from "react";
import Image from "next/legacy/image";
import cuteblackbaby from "/public/cuteblackbaby.svg";

function Homepage() {
  return (
    <div>
      <div className="w-full h-screen p-5   relative flex items-center text-left text-[#F1F1F1]">
        <Image
          src={cuteblackbaby}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Cute Black Baby"
        />

        <div className="max-w-md mx-16 z-10">
          <h1 className="text-4xl font-bold mb-4">OUR MANDATE</h1>
          <p>
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
