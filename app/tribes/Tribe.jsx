"use client";
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import happyafricanhugs from "/public/happyafricanhugs.png";

function Tribe() {
  return (
    <section>
      <div className="w-full  md:h-[700px]">
        <div className="relative">
          <Image
            src={happyafricanhugs}
            className=" w-full h-[600px] object-cover block bg-no-repeat bg-center transition-opacity duration-500"
            alt="happyafricanhugs"
          />
        </div>
        <div className="absolute top-[100px] md:top-[270px] md:w-[589px] z-50  md:ml-[8%]">
          <h1 className="text-zinc-100 text-center  font-bold md:text-[50px] mb-4">
            <Link href="/mandate">OUR TRIBE</Link>
          </h1>
          <p className="md:text-xl font-normal text-center text-zinc-100">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra imperdiet enim. Fusce est.
          </p>
        </div>

        <div className="inset-0 absolute md:h-[700px] bg-black opacity-50"></div>
      </div>
    </section>
  );
}

export default Tribe;
