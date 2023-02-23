import style from './Section1.module.css'
import Image from "next/image"
import imgReki from '../../assets/images/reki.png'

export default function Section1() {

  return (
   <div className={style.container_section_1}>

      <div className={style.text_hero} id='about'>
        <h1 >Hi, everyone I'm <span>Reki Desma Haldi</span></h1>
        <p>I am a Front-end Developer and Fullstack Web Developer. I create attractive and responsive web with framework NexsJS</p>
      </div>

      <div className={style.image_rapper}>
        <div className={style.circle} ></div>
        <Image  src={imgReki} alt='reki-image'/>
      </div>
      
   </div>
  )
}
