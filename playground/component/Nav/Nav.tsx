
import Link from "next/link"
import style from "./Nav.module.css"
export default function Nav(){
   return(
      <nav className={style.nav}>
         <div className={style.logo}>Rekidh</div>
         <div className={style.nav_menu}>
            <ul>
               <li><Link href='/'>About</Link> </li>
               <li><Link href='/'>Working Experience</Link> </li>
               <li><Link href='/'>Project</Link> </li>
            </ul>
         </div>
         <div >
            <button className={style.nav_button}> Let's Talk</button>

         </div>
      </nav>
   )
}