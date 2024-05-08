import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <div className='footer bg-cyan-600 font-sans text-gray-100'>
      <div className='p-10 md:p-5 '>
       <div className='justify-center items-center flex flex-col md:flex-row md:space-x-24'>
       <div className='footerlogo flex flex-row  text-lg font-normal md:flex-col md:space-y-3'>
          <img src='./footerLogo.svg' alt='footerlogo' className='w-12 h-12 md:w-36 md:h-36 mr-2' />
          <p className='font-light text-sm md:text-base whitespace-normal '>
            Lorem ipsum dolor sit amet, 
            <br/>
            consectetuer adipiscing elit.
            <br/>
            Maecenas porttitor congue massa.
            <br/>
             Fusce posuere, magna sed pulvinar ultricies,
          </p>
        </div>

        <div className='Footeritems flex flex-row text-sm font-light md:test-lg md:font-normal  md:flex-row mt-6 md:space-x-24'>
          <ul className='mb-4 md:mb-0 mr-4 space-y-3  md:space-y-8'>
            <li>Reach Us</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>

          <ul className='mb-4 md:mb-0 mr-6 space-y-3  md:space-y-8'>
            <li>Programs</li>
            <li>Arts</li>
            <li>SDGs</li>
            <li>Entrepreneurship</li>
          </ul>

          <ul className='space-y-3 md:space-y-8'>
            <li>Resources</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
            <li>News</li>
          </ul>
        </div>
       </div>

        <div className='border-t border-gray-100 border-400 mt-4 md:mt-10'>
          <div className='footersocial flex flex-row mt-4 space-x-6 md:space-x-10 justify-center items-center '>
            <img src='./baselinefacebook.svg' alt='facebook' className='w-6 ml-2' />
            <img src='./instagram.svg' alt='instagram' className='w-6 ml-2' />
            <img src='./twitter.svg' alt='twitter' className='w-6 ml-2' />
            <img src='./youtube.svg' alt='youtube' className='w-6 ml-2' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
