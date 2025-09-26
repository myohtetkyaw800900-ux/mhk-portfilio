import React, { useState } from "react";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
// import { atom, useRecoilState } from "recoil";
// import { textState } from "../recoil/TextState.js";

const Footer = () => {
    const [email, setEmail] = useState('')

    const handleClick=()=>{
        if(!email){
            alert("require email!")
        }
        else{
            alert("Thank you very much for your support!!!")
            setEmail('')
        }
        
    }

    // const [text , setText ] = useRecoilState(textState)

    // const handleClick = (e) => {
    //     e.preventDefault()

    //     if(!text){
    //       alert("Require text")
    //     }else{
    //       alert("Thank you for your support")
    //     }
    //     setText('')

    // }
  return (
    <footer className=" dark:text-white text-black py-8" id="footer">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-blue-500">MHK</h3>
            <p className="dark:text-gray-400 text-black">
              Web Developer based in the Myanmar, specializing in web and
              software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                value={email} required
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg dark:bg-gray-800 bg-white border dark:border-gray-600 border-white 
                focus:outline-none focus:border-green-400"
              />
              <button
                onClick={handleClick}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg hover:cursor-pointer hover:opacity-85"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="dark:text-gray-400 text-black">
            &copy; {new Date().getFullYear()} MHK. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.facebook.com/share/16ZSHB6bvd/" className="dark:text-gray-400 text-black dark:hover:text-white hover:opacity-50">
              <FaFacebook />
            </a>
            {/* <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a> */}
            <a href="https://www.youtube.com/feed/you" className="dark:text-gray-400 text-black dark:hover:text-white hover:opacity-50">
              <FaYoutube />
            </a>
            <a href="https://github.com/myohtetkyaw800900-ux" className="dark:text-gray-400 text-black dark:hover:text-white hover:opacity-50">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="dark:text-gray-400 text-black dark:hover:text-white hover:opacity-75">
              Privacy
            </a>
            <a href="#" className="dark:text-gray-400 text-black dark:hover:text-white hover:opacity-75">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;