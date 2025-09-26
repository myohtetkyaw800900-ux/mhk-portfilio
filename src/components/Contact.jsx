import React,{useState} from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleClick=()=>{
        if(!name){
            alert("require name!")
        }
        else if (!email){
            alert("require email!")
        }
        else if(!message){
            alert("require message!")
        }
        else{
            alert("Thank you very much for your Message!!!")
            setName('')
            setEmail('')
            setMessage('')
        }
        
    }

  return (
    <div className=" dark:text-white text-black py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development prjectgs or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:youremail@example.com" className='hover:underline'>
                    myohtetkyaw800900@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>+959779362393</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>62 * 19 Conor Mdy , Myanmar</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input type="text" 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className='w-full p-2 rounded dark:bg-gray-800 bg-[#FFFFFF] border dark:border-gray-600 border-white focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter Your Name'/>
                </div>
                <div>
                    <label htmlFor="emial" className='block mb-2'>Email</label>
                    <input type="email" required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className='w-full p-2 rounded dark:bg-gray-800 bg-[#FFFFFF] border dark:border-gray-600 border-white focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter Your Email'/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea type="text" required
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                    className='w-full p-2 rounded dark:bg-gray-800 bg-[#FFFFFF] border dark:border-gray-600 border-white focus:outline-none
                    focus:border-green-400'
                    rows="5"
                    placeholder='Enter Your Message'/>
                </div>
                <button onClick={handleClick} className='bg-gradient-to-r from-green-400 to-blue-500 text-white  md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full hover:cursor-pointer'> Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact