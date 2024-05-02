import React from 'react'
import './Navbar.css'
import { ItemNavbar } from '../ItemNavbar/ItemNavbar';

export const Navbar = () => {
  return (
    <nav>   
        <ul className='ul-nav'>
            <ItemNavbar content='Perfil' style='list'/>
            <ItemNavbar content='Proyectos' style='list' />
            <ItemNavbar content='Referencias' style='list'/>
            <ItemNavbar content='Experiencia' style='list'/>
        </ul>
    </nav>
  )
}
