import React from 'react'
import './Footer.css'
import { Experiences } from '../../Ui/Experiences/Experiences';



export const Footer = () => {
  return (
    <footer>
      <div className='container-footer'>
        <Experiences src='public/Images/Reactf.png' style='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter'/>
        <Experiences src='public/Images/node.png' style='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter'/>
        <Experiences src='public/Images/mongo.png' style='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter'/>
        <Experiences src='public/Images/java.png' style='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter'/>
      </div>
    </footer>
  )
}
