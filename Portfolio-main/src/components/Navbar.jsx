import React from 'react'

import Logo from "../assets/Logo.png"
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return <nav className="  mb-20 flex items-center justify-between py-6">
  <div className="flex flex-shrink-0 items-center w-10 h-10 ml-3">
    <img className="mx-2 w-10" src={Logo} alt=""/>
  </div>
  <div className="m-8 flex items-center justify-center gap-4 text-2xl"> 
  <a href="https://www.linkedin.com/in/harsh-patki/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/harshpatki45" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/harshpatki45/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://x.com/harshpatki45" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
  </div>
</nav>
}

export default Navbar
