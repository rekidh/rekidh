import Link from 'next/link'
import style from './footer.module.css'

export default function Footer() {
  return (
    <div className={style.c}>
      <div className={style.rapper}>
            <ul>
               <h3>Portfolio</h3>
               <li><a href=""></a>Dribbble1</li>
               <li><a href=""></a>Behance2</li>
               <li><a href=""></a>Codepe3</li>
               <li><a href=""></a>Github3</li>
            </ul>
            <ul>
               <h3>Portfolio</h3>
               <li><a href=""></a>Dribbble</li>
               <li><a href=""></a>Behance</li>
               <li><a href=""></a>Codepen</li>
               <li><a href=""></a>Github</li>
            </ul>
            <ul>
               <h3>Portfolio</h3>
               <li><a href=""></a>Dribbble</li>
               <li><a href=""></a>Behance</li>
               <li><a href=""></a>Codepen</li>
               <li><a href=""></a>Github</li>
            </ul>
      </div>
    </div>
  )
}
