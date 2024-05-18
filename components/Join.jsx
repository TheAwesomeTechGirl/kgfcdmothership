"use client"; // Add this line at the top
import React from "react";
import Image from "next/image";
import Button from "./Button";
import assetImage from "../public/images/Asset.svg"; // Adjust the path to your Asset.svg

function Join() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div
      className="bg-[#E3B522] p-8 items-center justify-between text-[#1D1D1D] bg-opacity-100 relative bg-no-repeat bg-right w-[20%]"
      style={{ backgroundImage: `url(${assetImage.src})`, width: "100%" }}
    >
      <div className="space-y-6">
        <h1 className="text-[15px] font-bold leading-[28px] sm:text-[25px] md:text-[16px] lg:text-[16px]">
          THE JOURNEY TO BUILDING A BETTER WORLD STARTS HERE WITH YOU
        </h1>
        <p className="font-normal text-[16px] md:text-[10px] lg:text-[12px] leading-[22.5px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Maecenas
          porttitor congue massa. Fusce posuere,magna sed
          <br />
          pulvinar ultricies, purus lectus malesuada libero,sit amet commodo
          magna eros quis urna,Nunc viverra imperdiet
          <br />
          enim. Fusce est.
        </p>
        <Button text="GET INVOLVED" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Join;
