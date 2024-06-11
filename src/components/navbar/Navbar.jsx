import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <p><a href="#Home">Home</a></p>
          <p><a href="#Home">What is GPT3</a></p>
          <p><a href="#Home">Open AI</a></p>
          <p><a href="#Home">Case Studies</a></p>
          <p><a href="#Home">Library</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
