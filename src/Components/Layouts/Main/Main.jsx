import React from 'react'
import './Main.css'
import { Titles } from '../../Ui/Titles/Titles';
import { Line } from '../../Ui/Line/Line';
import { Paragraph } from '../../Ui/Paragraph/Paragraph';
import { Card } from '../../Ui/Card/Card';
import { References } from '../../Ui/References/References';

export const Main = () => {
  return (
    <main>
      <Titles style='box-h2' styleImg='imgTitle' content='PERFIL' />
      <Line style='line-main' />
      <Paragraph content='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Unde, fuga. Minus aut sed, hic nulla modi eligendi odit expedita blanditiis numquam 
        eaque accusamus provident quaerat consequatur velit ab nisi eosLorem ipsum dolor sit amet 
        consectetur adipisicing elit. Unde, fuga. Minus aut sed, hic nulla modi eligendi odit expedita 
        blanditiis numquam eaque accusamus provident quaerat consequatur velit ab nisi eos Lorem, ipsum 
        dolor sit amet consectetur adipisicing elit. Corporis sed vel aperiam illum fugiat fuga animi illo 
        dolorem sit omnis eligendi veniam rem quasi, nobis nihil accusantium totam! Eius, labore!'/>
      <Titles style='box-h2' styleImg='imgTitle' content='PROYECTOS' />
      <Line style='line-main' />
      <div className='container-card'>
        <Card style='box-card' styleImg='imgCard' src='public/Images/React.svg' contentBox='contentP' href='' styleP='styleP' styleH='styleH' />
        <Card style='box-card' styleImg='imgCard' src='public/Images/React.svg' contentBox='contentP' href='' styleP='styleP' styleH='styleH' />
        <Card style='box-card' styleImg='imgCard' src='public/Images/React.svg' contentBox='contentP' href='' styleP='styleP' styleH='styleH' />
        <Card style='box-card' styleImg='imgCard' src='public/Images/React.svg' contentBox='contentP' href='' styleP='styleP' styleH='styleH' />
      </div>
      <Titles style='box-h2' styleImg='imgTitle' content='REFERENCIAS' />
      <Line style='line-main' />

      <div className='container-references'>
        <References styleDiv='box-references' style=''/>
        <References styleDiv='box-references' style=''/>
        <References styleDiv='box-references' style=''/>
      </div>
      <Titles style='box-h2' styleImg='imgTitle' content='EXPERIENCIA' />
    </main>
  )
}


