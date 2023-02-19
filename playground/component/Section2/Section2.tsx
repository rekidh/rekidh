import style from './section2.module.css'
import cheklist from '../../assets/images/Vector.svg'
import Image from 'next/image'
import Button from '../atomic/Button/Button'
import { useEffect,useState } from 'react'
import axios from 'axios'
function Section2() {
  const [data, setData] = useState(
      
        {jobTitle :String,
        starDate:String,
        point:[String,String,String,String,String],
        link:String }
    )
  const getData = async () => {
    await axios.get('https://rekidh-rekidh.vercel.app/api/working').then(res => setData(res.data))
  }
  
  useEffect(()  => {
    getData()
  },[])

  return (
    <div className={style.section_2}  id='work'>
        <h1>Working Experience</h1>
        <div className={style.card_section_2}>
          
          <div className={style.card_title}>
            <h1>{data.jobTitle.toString()}</h1>
            <p>{data.starDate.toString()}</p>
          </div>
          <ul className={style.card_list}>
            {
              data.point.map((item,index) => {
                  return (
                    <li key={index}>
                      <Image src={cheklist} width={22} height={22} alt=""/>
                      <p>{item.toString()}</p>
                    </li>
                  )
              })
            }
          </ul>

          <div className={style.card_footer}>
            <Button model='' size={{x:140,y:50}}>See Detail</Button>
            <h1>TecnoIT</h1>
          </div>
        </div>

        <div className={style.dot}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
  )
}

export default Section2