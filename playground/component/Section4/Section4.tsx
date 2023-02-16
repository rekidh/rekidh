import Button from '../atomic/Button/Button'
import style from './style.module.css'
export default function Section4() {
  return (
    <div className={style.section_header}>
      <div className={style.rapper}>
        <h1>Let's Connect and Say Hi!</h1>
        <p>If you'd like to say hi or work with me:</p>
      </div>
      <form action="" className={style.form}>
      <input type="text" />
        <Button model='' size={{x:100,y:50}}> Send</Button>
      </form>
    </div>
  )
}
