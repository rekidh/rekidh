import style from './Section1.module.css'
import Image from "next/image"
import imgReki from '../../assets/images/reki.png'
export default function Section1() {
  return (
   <>
      <div className={style.text_hero}>
        <h1 >Hi, Welcome everyone I'm <span>Reki Desma Haldi</span></h1>
      </div>
      <div className={style.section_hero}>
          <p className={style.text_paragraf}>I am a User Interface Designer & Front-end Developer. I design delightful products & code web templates.</p>
          <div className={style.ellipse} >
            <div className={style.ellipse}>
              <div className={style.ellipse}></div>
            </div>
          </div>
          <Image width={400} height={500} src={imgReki} alt='reki-image'/>
      </div>
   </>
  )
}
