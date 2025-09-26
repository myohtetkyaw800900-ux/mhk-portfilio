import React from 'react'
import img2 from '../assets/myp2.jpeg'

const About = () => {
    return (
        <div className=" dark:text-white text-black py-20" id="about">
          <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2  data-aos="fade-up" data-aos-delay="300" className="text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-12">
              <img  data-aos="fade-up" data-aos-delay="200"
                src={img2}
                alt=""
                className="w-72 h-96 rounded object-cover mb-8 md:mb-0"
              />
              <div  data-aos="fade-up" data-aos-delay="200" className="flex-1">
                <p className="text-lg mb-6">
                      I am an enthusiastic and motivated aspiring Web Developer with a strong interest in building responsive and user-friendly websites. I have hands-on experience with HTML, CSS, Java , JavaScript, and I am continuously learning modern frameworks and libraries to expand my skills.
                </p>
                <div  data-aos="fade-up" data-aos-delay="300" className="space-y-4">
                  <div className="flex items-center">
                    <label htmlFor="htmlandcss" className="w-2/12">
                      HTML & CSS
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                        transform transition-transform duration-300 hover:scale-105 w-10/12"
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="reactjs" className="w-2/12">
                      React JS
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                        transform transition-transform duration-300 hover:scale-105 w-11/12"
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="nodejs" className="w-2/12">
                      Node JS
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                        transform transition-transform duration-300 hover:scale-105 w-9/12"
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="java" className="w-2/12">
                      Java
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                        transform transition-transform duration-300 hover:scale-105 w-8/12"
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="C++" className="w-2/12">
                      C++
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                        transform transition-transform duration-300 hover:scale-105 w-8/12"
                      ></div>
                    </div>
                  </div>
                </div>
                <div  data-aos="fade-up" data-aos-delay="300" className="mt-7 flex justify-between text-center">
                    <div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-400 to-blue-500">
                            0+
                        </h3>
                        <p>Years Experience</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-400 to-blue-500">
                            10+
                        </h3>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-400 to-blue-500">
                            7+
                        </h3>
                        <p>Skills</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default About