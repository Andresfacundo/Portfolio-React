import React from 'react'
import './Card.css'
import { Image } from '../Image/Image';
import { Paragraph } from '../Paragraph/Paragraph';
import { ItemNavbar } from '../ItemNavbar/ItemNavbar';

export const Card = ({href,contentBox, style, src, styleImg,styleP,styleH,content,content2}) => {
    return (
        <div className={style}>
            <Image style={styleImg} src={src} />
            <div className={contentBox}>
                <Paragraph content={content} style={styleP}/>
                <Paragraph content={content2} style={styleP}/>
                <ItemNavbar content='Ir a proyecto' href={href} style={styleH}/>
            </div>
        </div>
    )
}

