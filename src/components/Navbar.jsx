import React, { useState , useEffect } from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
      const [darkMode , setDarkMode] = useState(()=>{
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    }, [darkMode]);

    const nav = [
      {
        name: "Home",
        path: "#",
      },
      {
        name: "About",
        path: "#about",
      },
      {
        name: "Services",
        path: "#service",
      },
      {
        name: "Projects",
        path: "#project",
      },
      {
        name: "Contact",
        path: "#contact",
      },
    ]


  return (
    <nav className=' dark:text-white text-black px-8 md:px-16 lg:px-24 italic'>
        <div className='container py-2 flex  justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline text-blue-500'>MHK</div>
            <div className='space-x-6 lg:ms-36'>
                {/* <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#about" className='hover:text-gray-400'>About</a>
                <a href="#service" className='hover:text-gray-400'>Services</a>
                <a href="#project" className='hover:text-gray-400'>Projects</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a> */}

                {nav.map((item, index) =>
                  item.path.startsWith("#") ? (
                    <a key={index} href={item.path} className='hover:text-gray-400'>
                      {item.name}
                    </a>
                  ) : (
                    <Link key={index} to={item.path} className='hover:text-gray-400'>
                      {item.name}
                    </Link>
                  )
                )}

            </div>
            <div className='flex gap-3'>
                <button onClick={()=>setDarkMode(!darkMode)} className='text-white box-border p-1.5 md:inline justify-end'>
                {
                    darkMode  ? <MdLightMode size={20} className='dark:text-white text-black'/> : <MdDarkMode size={20} className='text-black dark:text-white'/>
                }
                </button>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                <a href="#footer">
                  Connect With Me
                  </a>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar