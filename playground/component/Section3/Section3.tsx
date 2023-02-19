import Button from '../atomic/Button/Button'
import Card from '../atomic/Card/Card'
import style from './section3.module.css'

export default function Section3() {
  return (
   <div className={style.section3} >
      
      <div className={style.header} id='project'>
         <h1>Find My Work</h1>
         <div className={style.btn_header}>
            <Button model={'primary'} size={{x:140,y:50}} >All</Button>
            <Button model={'secondary'} size={{x:140,y:50}}>Design</Button>
            <Button model={'secondary'} size={{x:140,y:50}}>Code</Button>
         </div>
      </div> 

      <div className={style.container_card}>
         <div className={style.rapper}>
            <Card title='title1'>Slug</Card>
            <Card title='title2'>Slug</Card>
            <Card title='title3'>Slug</Card>
         </div>
         <div className={style.rapper}>
            <Card title='title4'>Slug</Card>
            <Card title='title5'>Slug</Card>
            <Card title='title6'>Slug</Card>
         </div>
         <div className={style.rapper}>
            <Card title='title7'>Slug</Card>
            <Card title='title8'>Slug</Card>
            <Card title='title9'>Slug</Card>
         </div>
      </div>
      <div className={style.bg_circle}></div>
   </div>
  )
}
