import style from './section2.module.css'
import cheklist from '../../assets/images/Vector.svg'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../atomic/Button/Button'
function Section2() {
  return (
    <div className={style.section_2}  id='work'>

        <h1>Working Experience</h1>

        <div className={style.card_section_2}>
          
          <div className={style.card_title}>
            <h1>User Interface Designer Intern</h1>
            <p>January - March 2019</p>
          </div>
        
          <ul className={style.card_list}>
              <li>
                <Image src={cheklist} width={22} height={22} alt=""/>
                <Link href='/' />Designed the APPSO (Aplikasi Pembayaran Sekolah Online) website page
              </li>
              <li>
                <Image src={cheklist} width={22} height={22} alt=""/>
                <Link href='/' />Successfully made an animated video to introduce appso.id products
              </li>
          </ul>

          <div className={style.card_footer}>
            <Button model='' size={{x:140,y:50}}>See Detail</Button>
            <h1>TecnoIT</h1>
          </div>
        </div>

        <div className={style.dot}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
  )
}

export default Section2