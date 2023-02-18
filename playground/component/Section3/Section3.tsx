import Button from '../atomic/Button/Button'
import Card from '../atomic/Card/Card'
import style from './section3.module.css'

export default function Section3() {
  return (
   <div className={style.section3} >
      
      {/* <div className={style.bg_circle}></div> */}
      
      <div className={style.head} id='project'>
         <h1>Find My Work</h1>
         <div className={style.container_btn}>
            <Button model={'primary'} size={{x:140,y:50}} >All</Button>
            <Button model={'secondary'} size={{x:140,y:50}}>Design</Button>
            <Button model={'secondary'} size={{x:140,y:50}}>Code</Button>
         </div>
      </div>
      <div className={style.rapper}>
         <Card title='title'>Slug</Card>
         <Card title='title'>Slug</Card>
         <Card title='title'>Slug</Card>
         <Card title='title'>Slug</Card>
         <Card title='title'>Slug</Card>
         <Card title='title'>Slug</Card>
         <Card title='title'>Slug</Card>
         <Card title='title'>Slug</Card>
         <Card title='title'>Slug</Card>
      </div>
   </div>
  )
}
