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
  const [slider,setSlider] = useState<number>(0)
  const getData = async () => {
    const host = window.location.href
    await axios.get(`${host}api/working`).then(res => setData(res.data))
  }
  useEffect(()  => {
    getData()
  },[])
  useEffect(()=>{
    let timer = setTimeout(() => {
      console.log(slider>=data.length-1?0:slider+1)
     return setSlider(slider>=data.length-1?0:slider+1)
    }, 5000)
    return () => {
        clearTimeout(timer);
      };
  })


  return (
    <div className={style.section_2}  id='work'>
        <h1>Working Experience</h1>
        <div className={style.container}>
            {data.map((item,index) => (
                <div className={`${index==slider? style.card_active :style.card_inactive}`} id={`card_${index}`} >
                  <div className={style.card_title}>
                    <h1 >{item.jobTitle.toString()}</h1>
                    <p >{item.starDate.toString()}</p>
                  </div>
                  <ul className={style.card_list}>
                    {
                      item.point.map((item2) => 
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
                    <h1 >{item.perusahaan}</h1>
                  </div>
                </div>
              ))
            }
            </div>
        <div className={style.dot}>
          {data.map((item,index) => (
            <span onClick={(e)=>setSlider(index)} style={{backgroundColor:index==slider?'#fff':''}} ></span>
          ))}
        </div>
      </div>
  )
}

export default Section2