import style from './section2.module.css'
import cheklist from '../../assets/images/Vector.svg'
import Image from 'next/image'
import Button from '../atomic/Button/Button'
import { useEffect,useState } from 'react'
import axios from 'axios'

type DataType = {
    jobTitle:string
   starDate:string
   point:string[]
   link:string
   perusahaan:string
}

function Section2() {
  const [data, setData] = useState<DataType[]>([] as DataType[])
  const [slider,setSlider] = useState<DataType>()
  const getData = async () => {
    const host = window.location.href
    await axios.get(`${host}api/working`).then(res => setData(res.data))
  }
  useEffect(()  => {
    console.log('data sedang di panggil')
    getData()
  },[])
  useEffect(()  => {
    console.log('data sudah di dapatakan')
    setSlider(data[0])
  },[data])

  return (
    <div className={style.section_2}  id='work'>
        <h1>Working Experience</h1>
            {
              // data.map((item) =>
              slider? (
                <div className={style.card_section_2} >
                <div className={style.card_title}>
                  <h1 >{slider.jobTitle.toString()}</h1>
                  <p >{slider.starDate.toString()}</p>
                </div>
                <ul className={style.card_list}>
                  {
                    slider.point.map((item2) => 
                      (
                        <li>
                          <Image src={cheklist} width={22} height={22} alt='reki'/>
                          <p >{item2.toString()}</p>
                        </li>
                      )
                    )
                  }
                </ul>
                <div className={style.card_footer}>
                  <Button model='' size={{x:140,y:50}}>See Detail</Button>
                  <h1 >{slider.perusahaan}</h1>
                </div>
              </div>
              ):(<div>loading...</div>)
                // ))
            }
        <div className={style.dot}>
          {data?data.map((value,index)=>(
            <span onClick={()=>setSlider(data[index])}></span>
          )):''}

        </div>
      </div>
  )
}

export default Section2