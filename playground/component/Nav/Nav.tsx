
import Link from "next/link"
import style from "./Nav.module.css"
import Button from "../atomic/Button/Button"
export default function Nav(){
   return(
      <nav className={style.nav}>
         <div className={style.logo}>Rekidh</div>
         <div className={style.nav_menu}>
            <ul>
               <li><Link href='#about'>About</Link> </li>
               <li><Link href='#work'>Working Experience</Link> </li>
               <li><Link href='#project'>Project</Link> </li>
            </ul>
         </div>
         <div className={style.container_btn}>
            <Button model="primary" size={{x:140,y:50}}> Let's Talk</Button>
         </div>
         <div className={style.hamburger_menu}>
            <span></span>
            <span></span>
            <span></span>
         </div>
      </nav>
   )
}