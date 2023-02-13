import { ReactNode } from 'react'
import style from './button.module.css'

interface Button{
  children:ReactNode;
  model:string;
}


export default function Button(props:Button,) {
  const {children,model}=props

  switch(model){
    case 'primary':
      return <button className={style.primary}>{children}</button>
    case'secondary':
      return <div className={style.rapper}><button className={style.secondary}><span>{children}</span></button></div>
    default:
      return <button className={style.btn}>{children}</button>
  }

}
