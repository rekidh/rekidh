import { ReactNode } from 'react'
import style from './button.module.css'

interface Button{
  children:ReactNode;
  
}

export default function Button(props:Button) {
  const {children}=props
  return (
      <button type="submit" className={style.btn}> {children}</button>
  )
}
