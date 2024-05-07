import React from 'react'
import './Header.css';
import { Image } from '../../Ui/Image/Image';
import { Navbar } from '../../Ui/Navbar/Navbar';
import { ItemNavbar } from '../../Ui/ItemNavbar/ItemNavbar';
import { FaLinkedinIn,FaInstagram,FaGithub } from 'react-icons/fa';
import { Line } from '../../Ui/Line/Line';
import profile from '../../../../public/Images/profile.jpg'
import imgSena from '../../../../public/Images/Sena.png'

export const Header = () => {
  return (
    <header>
        <Image src={profile} style='Image' />
        <h1>Andres Facundo</h1>
        <Line style='Line'/>
        <Navbar/>
      
        <Image src={imgSena} style='img-sena'/>
        <ul className='icons-ul'>
          <ItemNavbar style='icons' href='https://www.linkedin.com/in/andresfacundo/' target="_blank" content={<FaLinkedinIn />}/>
          <ItemNavbar style='icons' href='https://www.instagram.com/andres_facun/' content={<FaInstagram />}/>
          <ItemNavbar style='icons' href='https://github.com/Andresfacundo' content={<FaGithub />}/>
        </ul>
    </header>
  ) 
}