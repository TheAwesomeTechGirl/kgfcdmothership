import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";


// Import images
import footerLogo from "../public/footerLogo.svg";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer bg-[#1086A0] text-gray-100">
      <div className="w-full p-6 lg:max-w-[1200px] lg:mx-auto md:p-5">
        <div className="justify-center items-center flex flex-col md:flex-row md:space-x-24">
          <div className="footerlogo flex flex-row md:w-[30%] gap-6 mb-5 md:flex-col md:space-y-3">
            <Image
              src={footerLogo}
              alt="footerlogo"
              className="w-10 h-10 md:w-16 md:h-16 mr-2"
            />
            <p className="font-light text-[12px] md:text-[14px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies,
            </p>
          </div>

          <div className="Footeritems text-[10px] w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3  md:text-[14px] font-normal md:w-[70%] leading-[28px] mt-3 mb-4">
            <ul className="space-y-3">
              <li className="lg:text-[18px]">Reach Us</li>
              <li><Link href="/">About Us</Link></li>
              <li>Contact Us</li>
            </ul>

            <ul className="space-y-3">
               <li className="lg:text-[18px]"><Link href="/programs">Programs</Link></li>
                <li><Link href="/programs">Arts</Link></li>
              <li>SDGs</li>
               <li><Link href="/programs">Entrepreneurship</Link></li>
            </ul>

            <ul className="space-y-3">
              <li className="lg:text-[18px]">Resources</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>News</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-4 md:mt-10">
      <div className="footersocial flex flex-row mt-4 gap-4 md:gap-10 justify-center items-center">
        <Link href="https://www.facebook.com/kindlegatefoundation">
          <MdFacebook className="w-6 h-6 md:w-8 md:h-8" />
        </Link>
        <Link href="https://www.instagram.com/kindlegatefoundation/?hl=en">
          <FaInstagram className="w-6 h-6 md:w-8 md:h-8" />
        </Link>
        <Link href="https://twitter.com/kindlegatecares">
          <LuTwitter className="w-6 h-6 md:w-8 md:h-8" />
        </Link>
        <Link href="https://www.linkedin.com/in/kindle-gate-foundation-090080284/">
          <FaLinkedinIn className="w-6 h-6 md:w-8 md:h-8" />
        </Link>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Footer;
