import style from './Section1.module.css'
import Image from "next/image"
import imgReki from '../../assets/images/reki.png'

export default function Section1() {

  return (
   <div className={style.container_section_1}>

      <div className={style.text_hero} id='about'>
        <h1 >Hi, everyone I'm <span>Reki Desma Haldi</span></h1>
        <p>I am a User Interface Designer & Front-end Developer. I design delightful products & code web templates.</p>
      </div>

      <div className={style.image_rapper}>
        <div className={style.circle} ></div>
          <Image  src={imgReki} alt='reki-image'/>
      </div>
      
   </div>
  )
}
