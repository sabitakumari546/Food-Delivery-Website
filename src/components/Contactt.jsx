import React from 'react'
import {FaFacebookF} from "react-icons/fa"
import {IoLogoTwitter} from "react-icons/io"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {AiOutlineWhatsApp} from "react-icons/ai"
import {AiFillPhone} from "react-icons/ai"
import {AiFillMail} from "react-icons/ai"
const contact = () => {
  return (
   
     <div className="flex flex-column font-bold text-4xl text-center bg-gray-300 my-4 rounded-lg">
     <h2>
     <p className='text-orange-600'>Follow Us</p>
     <div className="flex flex-row text-center my-2 justify-center px-1">
     <a href="https://www.facebook.com/profile.php?id=100037460253793"><FaFacebookF/></a>
     <a href="https://twitter.com/SabitaK99922948"><IoLogoTwitter/></a>
     <a href="https://www.linkedin.com/in/sabita-kri"><AiFillLinkedin/></a>
     <a href="https://github.com/sabitakumari546"><AiFillGithub/></a>
     </div>
     <p className='text-orange-600'>Contact Us</p>
     <div className="flex flex-row text-center px-1  my-2 justify-center ">
     <a href="https://api.WhatsApp.com/send?phone=+919876533210"><AiOutlineWhatsApp/></a>
     <a href="tell: +919876533210"><AiFillPhone/></a>
     <a href="mailto: savita985233@gmail.com"><AiFillMail/></a>
     </div>
     </h2>
 </div>
  )
}

export default contact
