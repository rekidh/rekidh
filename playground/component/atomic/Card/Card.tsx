import { ReactNode } from 'react'
import style from './card.module.css'
import Image from 'next/image'
import imgCard from '../../../assets/images/card.png'
import Button from '../Button/Button'


interface Card{
   children: ReactNode,
   title:string
}

export default function Card(props:Card) {
  return (
    <div className={style.container}>
      <div className={style.container_img}>
         <Image src={imgCard} width={300} height={240}  alt={`"${props.title}"`} />
      </div>
      <h1>{props.title}</h1>
      <div className={style.rapper_btn}>
         <div className={style.child}>
            {props.children}
         </div>
         <div className={style.btn_container}>
            <Button model='' size={{x:120,y:40}}>See Details</Button>
         </div>
      </div>
    </div> 
  )
}
