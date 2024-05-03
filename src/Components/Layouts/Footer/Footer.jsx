import React from 'react'
import './Footer.css'
import { Experiences } from '../../Ui/Experiences/Experiences';



export const Footer = () => {
  return (
    <footer>
      <div className='container-footer'>
        <Experiences src='src/Images/Reactf.png' style='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter'/>
        <Experiences src='src/Images/node.png' style='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter'/>
        <Experiences src='src/Images/mongo.png' style='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter'/>
        <Experiences src='src/Images/java.png' style='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter'/>
      </div>
    </footer>
  )
}
