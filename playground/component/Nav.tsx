
import Link from "next/link"
import style from "../styles/Nav.module.css"
export default function Nav(){
   return(
      <nav className={style.nav}>
         <div className="logo">Playground</div>
            <div className={style.d_flex}>
               <div className={style.d_flex}>
                  <form action=""  className={style.d_flex}>
                     <label htmlFor="search"> Search</label>
                     <input type="text" id="search" />
                  </form>
                  <Link href={'/'}>Resume</Link>
               </div>

               <div className={style.burger}>
                  <span className={style.burger_items}></span>
                  <span className={style.burger_items}></span>
                  <span className={style.burger_items}></span>
               </div>
            </div>
      </nav>
   )
}