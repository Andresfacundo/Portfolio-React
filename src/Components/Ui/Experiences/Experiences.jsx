import React from 'react'
import { Image } from '../Image/Image';
import { Paragraph } from '../Paragraph/Paragraph';
import { Line } from '../Line/Line';

export const Experiences = ({content,boxFooter,styleLine,style,src,classP}) => {
  return (
    <div className={boxFooter}>
        <Image src={src} style={style}/>
        <Line style={styleLine}/>
        <Paragraph style={classP} content={content}/>
    </div>
  )
}
