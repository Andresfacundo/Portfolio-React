import React from 'react'
import './Header.css';
import { Image } from '../../Ui/Image/Image';
import { Navbar } from '../../Ui/Navbar/Navbar';

export const Header = () => {
  return (
    <header>
        <Image src='src/images/salchicha.jpeg' style='Image' />
        <h1>Andres Facundo</h1>
        <hr className='hr'/>
        <Navbar/>
        <Image src='src/images/Sena.png' style='img-sena'/>
    </header>
  )
}