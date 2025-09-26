import React from "react";
import dashboard from "../assets/dashboard.png";
import login from "../assets/login.png";
import job from "../assets/project2.png";

const projects = [
  {
    id: 1,
    name: "Dashboard",
    technologies: "Practice Design",
    image: dashboard,
    github: "https://dashboard-rouge-three-85.vercel.app/",
  },
  {
    id: 2,
    name: "Login",
    technologies: "Frontend Design",
    image: login,
    github: "https://login-psi-seven-70.vercel.app/",
  },
  {
    id: 3,
    name: "Jobs",
    technologies: "MERN Stack",
    image: job,
    github: "https://project2-orpin-mu.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className=" dark:text-white text-black py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2  data-aos="fade-up" data-aos-delay="300" className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div  data-aos="fade-up" data-aos-delay="300" key={project.id} className="dark:bg-gray-800 bg-white p-5 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />

              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="dark:text-gray-400 text-black mb-4">{project.technologies}</p>

              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;