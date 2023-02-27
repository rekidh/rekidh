import { ReactNode } from 'react'
import style from './button.module.css'

interface Button{
  children:ReactNode;
  model:string;
  size:{x:number ,y:number}
}

 
export default function Button(props:Button,) {
  const {children,model,size}=props

  switch(model){
    case 'primary':
      return (
        <button 
          className={`${style.primary} ${style.btn}`} 
          style={{width:size.x,height:size.y}}>
          {children}
        </button>
      )
    case'secondary':
      return (
        <div 
          className={`${style.secondary} ${style.btn} `} 
          style={{width:size.x,height:size.y}}>
          <button className={`${style.rapper}`} >
            <span className={`${style.text_gradient} ${style.ii}`}>
              {children}
            </span>
          </button>
        </div>)
    default:
      return (
        <button 
        className={`${style.btn}`} 
        style={{width:size.x,height:size.y}}>
          <span className={style.text_gradient}>
            {children}
          </span>
        </button>
      )
  } 

}
