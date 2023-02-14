import style from './section2.module.css'
import cheklist from '../../assets/images/Vector.svg'
import Link from 'next/link'
import Image from 'next/image'
function Section2() {
  return (
    <div className={style.section}>
        <h2>Working Experience</h2>
        <div className={style.card}>
          <div className={style.title}>
              <h1>User Interface Designer Intern</h1>
              <p>January - March 2019</p>
          </div>
          <ul className={style.ceklist}>
              <li>
                <Image src={cheklist} width={22} height={22} alt=""/>
                <Link href='/' />Designed the APPSO (Aplikasi Pembayaran Sekolah Online) website page
              </li>
              <li>
                <Image src={cheklist} width={22} height={22} alt=""/>
                <Link href='/' />Successfully made an animated video to introduce appso.id products
              </li>
          </ul>
          <div className={style.container}>
            <button className={style.btn}>See Detail</button>
            <h2>TecnoIT</h2>
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