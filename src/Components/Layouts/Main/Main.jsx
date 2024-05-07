import React from 'react'
import './Main.css'
import { Titles } from '../../Ui/Titles/Titles';
import { Line } from '../../Ui/Line/Line';
import { Paragraph } from '../../Ui/Paragraph/Paragraph';
import { Card } from '../../Ui/Card/Card';
import { References } from '../../Ui/References/References';
import bleux from '../../../../public/Images/bleux.png'
import infiniteGaming from '../../../../public/Images/InfiniteGaming.png'
import Portfolio from '../../../../public/Images/Portfolio.png'
import triqui from '../../../../public/Images/Triqui.png'

export const Main = () => {
  return (
    <main>
      <Titles style='box-h2' styleImg='imgTitle' content='PERFIL' />
      <Line style='line-main' />
      <Paragraph content='Desarrollador de software con experiencia en tecnologías como JavaScript, SQL, MySQL, HTML, 
CSS y manejo de versiones con GIT. Me especializo en el desarrollo de aplicaciones frontend y 
backend utilizando estas tecnologías para crear interfaces de usuario atractivas y funcionales. 
Además de mis competencias técnicas, poseo habilidades interpersonales como comunicación 
efectiva, adaptabilidad, pensamiento crítico y trabajo en equipo. Estoy comprometido en 
colaborar en proyectos desafiantes donde pueda aplicar todas mis destrezas para desarrollar 
soluciones de calidad y generar un impacto positivo en el campo del desarrollo de 
aplicaciones. Me entusiasman las oportunidades que me permitan impulsar el éxito de los 
proyectos y contribuir al crecimiento de los equipos de desarrollo.'/>
      <Titles style='box-h2' styleImg='imgTitle' content='PROYECTOS' />
      <Line style='line-main' />
      <div className='container-card'>
        <Card content='Bleux' content2='Maquetacion proyecto bleux' style='box-card' styleImg='imgCard' src={bleux} contentBox='contentP' href='https://project-bleux.vercel.app/' styleP='styleP' styleH='styleH' />
        <Card content='InfiniteGaming' content2='Calidad de software' style='box-card' styleImg='imgCard' src={infiniteGaming} contentBox='contentP' href='https://calidad-de-software-ip45.vercel.app/' styleP='styleP' styleH='styleH' />
        <Card content='Portfolio' content2='Maquetacion Portfolio' style='box-card' styleImg='imgCard' src={Portfolio} contentBox='contentP' href='https://deply-portafolio.vercel.app/' styleP='styleP' styleH='styleH' />
        <Card content='Triqui' content2='JuegoTriqui' style='box-card' styleImg='imgCard' src={triqui} contentBox='contentP' href='https://triqui-sandy.vercel.app/' styleP='styleP' styleH='styleH' />
      </div>
      <Titles style='box-h2' styleImg='imgTitle' content='REFERENCIAS' />
      <Line style='line-main' />

      <div className='container-references'>
        <References styleDiv='box-references' style='' />
        <References styleDiv='box-references' style='' />
        <References styleDiv='box-references' style='' />
      </div>
      <Titles style='box-h2' styleImg='imgTitle' content='EXPERIENCIA' />
    </main>
  )
}


