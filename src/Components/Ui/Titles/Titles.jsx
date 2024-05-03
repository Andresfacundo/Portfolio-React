import React from 'react'
import './Titles.css'
import { Image } from '../Image/Image';


export const Titles = ({content,style,styleImg}) => <h2 className={style}><Image src='public/Images/Sena.png' style={styleImg}/>{content}</h2>