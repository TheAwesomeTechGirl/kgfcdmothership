"use client";
import React from 'react'
import Header from "@/components/Header";
import Tribe from "./Tribe";
import Join from "@/components/Join";
import Footer from "@/components/Footer";
import { CiUser } from "react-icons/ci";

function page() {
  return (
    <section className="overflow-hidden">
    <div className="w-full h-[113px] fixed top-0 z-50 flex items-center justify-center">
      <Header />
    </div>
    <Tribe />
    <section>
        <div className="container mx-auto p-14">
          <h1 className="text-center text-2xl font-bold mb-8">Our Team</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="flex flex-col items-center text-center mt-10">
            <CiUser className="bg-[#E3B522] w-full h-[224px] md:w-[230px] text-[#D9D9D9] " />
              <h2 className="text-xl font-semibold mt-4   ">TRUSTEES</h2>
              <div className="w-[85px] h-[0px] border-2 rounded-[3px] border-amber-400"></div>
            </div>
            <div className="gap-[70px]">
              <p className="mr-24 p-4 font-normal text-[#2B2B2B] text-justify leading-[22.5px] text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, 
purus lectus malesuada libero, sit amet commodo magna eros quis urna. 
Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant 
morbi tristique senectus et netus et malesuada fames ac turpis egestas.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor 
congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus 
malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra 
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, 
purus lectus malesuada libero, sit amet commodo magna eros quis urna. 
Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant 
morbi tristique senectus et netus et malesuada fames 
</p>
<div className="px-8 py-4  bg-cyan-500 rounded-[30px] mt-4 inline-block">
          <div className="text-stone-900 text-[25px] font-bold font-['Calibri'] leading-7">
          Learn more
          </div>
        </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
            <div className="flex flex-col items-center text-center mt-10">
            <CiUser className="bg-[#E3B522] w-full h-[224px] md:w-[230px] text-[#D9D9D9] " />
              <h2 className="text-xl font-semibold mt-4   ">BOARD OF DIRECTORS</h2>
              <div className="w-[206px] h-[0px] border-2 rounded-[3px] border-amber-400"></div>
            </div>
            <div className="gap-[70px]">
              <p className="mr-24 p-4 font-normal text-[#2B2B2B] text-justify leading-[22.5px] text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, 
purus lectus malesuada libero, sit amet commodo magna eros quis urna. 
Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant 
morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor 
congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus 
malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra 

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, 
purus lectus malesuada libero, sit amet commodo magna eros quis urna. 
Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant 
morbi tristique senectus et netus et malesuada fames 

</p>
<div className="px-8 py-4  bg-cyan-500 rounded-[30px] mt-4 inline-block">
          <div className="text-stone-900 text-[25px] font-bold font-['Calibri'] leading-7">
          Learn more
          </div>
        </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-14">
          <h1 className="text-center text-2xl font-bold mb-8">Our Team</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="flex flex-col items-center text-center mt-10">
            <CiUser className="bg-[#E3B522] w-full h-[224px] md:w-[230px] text-[#D9D9D9] " />
              <h2 className="text-xl font-semibold mt-4   ">GOVERNING COUNCIL</h2>
              <div className="w-[206px] h-[0px] border-2 rounded-[3px] border-amber-400"></div>
            </div>
            <div className="gap-[70px]">
              <p className="mr-24 p-4 font-normal text-[#2B2B2B] text-justify leading-[22.5px] text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, 
purus lectus malesuada libero, sit amet commodo magna eros quis urna. 
Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant 
morbi tristique senectus et netus et malesuada fames ac turpis egestas.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor 
congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus 
malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra 
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, 
purus lectus malesuada libero, sit amet commodo magna eros quis urna. 
Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant 
morbi tristique senectus et netus et malesuada fames 
</p>
<div className="px-8 py-4  bg-cyan-500 rounded-[30px] mt-4 inline-block">
          <div className="text-stone-900 text-[25px] font-bold font-['Calibri'] leading-7">
          Learn more
          </div>
        </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
            <div className="flex flex-col items-center text-center mt-10">
            <CiUser className="bg-[#E3B522] w-full h-[224px] md:w-[230px] text-[#D9D9D9] " />
              <h2 className="text-xl font-semibold mt-4   ">VOLUNTEERS</h2>
              <div className="w-[150px] h-[0px] border-2 rounded-[3px] border-amber-400"></div>
            </div>
            <div className="gap-[70px]">
              <p className="mr-24 p-4 font-normal text-[#2B2B2B] text-justify leading-[22.5px] text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, 
purus lectus malesuada libero, sit amet commodo magna eros quis urna. 
Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant 
morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor 
congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus 
malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra 

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, 
purus lectus malesuada libero, sit amet commodo magna eros quis urna. 
Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant 
morbi tristique senectus et netus et malesuada fames 

</p>
<div className="px-8 py-4  bg-cyan-500 rounded-[30px] mt-4 inline-block">
          <div className="text-stone-900 text-[25px] font-bold font-['Calibri'] leading-7">
          Learn more
          </div>
        </div>
            </div>
          </div>
        </div>
      </section>
    <Join />
    <Footer />
  </section>
  )
}

export default page
