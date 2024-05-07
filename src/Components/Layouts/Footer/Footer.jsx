import React from 'react'
import './Footer.css'
import { Experiences } from '../../Ui/Experiences/Experiences';
import reactf from '../../../../public/Images/Reactf.png'
import node from '../../../../public/Images/node.png'
import mongo from '../../../../public/Images/mongo.png'
import java from '../../../../public/Images/java.png'



export const Footer = () => {
  return (
    <footer>
      <div className='container-footer'>
        <Experiences src={reactf} style='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter'/>
        <Experiences src={node} style='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter'/>
        <Experiences src={mongo} style='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter'/>
        <Experiences src={java} style='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter'/>
      </div>
    </footer>
  )
}
