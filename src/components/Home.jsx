import React from 'react'
import img1 from '../assets/myp1.jpg'
import { MdFileDownload } from "react-icons/md";
import cv from '../../public/Myo Htet Kyaw.pdf';

const Hero = () => {
  return (
    <div className=' dark:text-white text-black text-center py-16'>
        <img  data-aos="fade-up" data-aos-delay="300" src={img1} alt="" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
        <h1 data-aos="fade-up" data-aos-delay="300" className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Myo Htet Kyaw</span>
            ,Web Developer
        </h1>
        <p  data-aos="fade-up" data-aos-delay="300" className='mt-4 text-lg dark:text-gray-300 text-black'>
            I specialize in building modern and responsive web applications.
        </p>
        <div className='mt-7 space-x-4'  data-aos="fade-up" data-aos-delay="300">
            <button className='bg-blue-600 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              <a href={cv} className='flex' download>
                Download CV <MdFileDownload size={20} className='mt-1 ms-1'/>
              </a>
            </button>

            {/* <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button> */}
        </div>

    </div>
  )
}

export default Hero