import React from "react";
import Image from "next/legacy/image";

// Import images
import footerLogo from "../public/footerLogo.svg";
import facebookIcon from "../public/baselinefacebook.svg";
import instagramIcon from "../public/instagram.svg";
import twitterIcon from "../public/twitter.svg";
import youtubeIcon from "../public/youtube.svg";

function Footer() {
  return (
    <div className="footer bg-[#1086A0] text-gray-100">
      <div className="w-full p-6 lg:max-w-[1200px] lg:mx-auto md:p-5">
        <div className="justify-center items-center flex flex-col md:flex-row md:space-x-24">
          <div className="footerlogo flex flex-row md:w-[30%] gap-6 mb-5 md:flex-col md:space-y-3">
            <Image
              src={footerLogo}
              alt="footerlogo"
              className="w-10 h-10 md:w-20 md:h-20 mr-2"
            />
            <p className="font-light text-[12px] md:text-[14px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies,
            </p>
          </div>

          <div className="Footeritems text-[12px] w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:text-[20px] md:text-[14px] font-normal md:w-[70%] leading-[28px] mt-3 mb-4">
            <ul className="space-y-3">
              <li>Reach Us</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>

            <ul className="space-y-3">
              <li>Programs</li>
              <li>Arts</li>
              <li>SDGs</li>
              <li>Entrepreneurship</li>
            </ul>

            <ul className="space-y-3">
              <li>Resources</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>News</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 border-400 mt-4 md:mt-10">
          <div className="footersocial flex flex-row mt-4 gap-4 md:gap-10 justify-center items-center">
            <Image src={facebookIcon} alt="facebook" className="w-4 ml-2" />
            <Image src={instagramIcon} alt="instagram" className="w-4 ml-2" />
            <Image src={twitterIcon} alt="twitter" className="w-4 ml-2" />
            <Image src={youtubeIcon} alt="youtube" className="w-4 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
