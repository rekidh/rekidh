import Button from '../atomic/Button/Button'
import Card from '../atomic/Card/Card'
import style from './section3.module.css'

export default function Section3() {
  return (
   <div className={style.section3}>
      <div className={style.head}>
         <h1>Find My Work</h1>
         <div className={style.container_btn}>
            <Button model={'primary'} >All</Button>
            <Button model={'secondary'}>Design</Button>
            <Button model={'secondary'}>Code</Button>
         </div>
      </div>
         <div className={style.card_container}>
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
         <div className={style.bg_circle}></div>
         </div>
   </div>
  )
}
