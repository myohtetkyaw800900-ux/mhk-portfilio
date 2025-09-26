import React, { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Service from './components/Service.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Projects from './components/Projects.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {

  useEffect(()=>{
    AOS.init({
      duration: 1000,
    })
  },[])

  return (
    <div className='dark:bg-[#181922] bg-[#EDF1F7]'>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App