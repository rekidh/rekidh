import { ReactNode } from "react"
import Image from "next/image"
import ImageReki from '../assets/images/reki.png'
import Nav from "./Nav";

interface BigerCard{
   children:ReactNode,
}

export default function BigerCard(props:BigerCard){
   const {children} =props;

   return(
      <div>
         <Nav/>
         <div className="container-text">
            <div className="text">
               <h5>Web Programing</h5>
               <h1>Reki Desma Haldi</h1>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem facere excepturi officiis suscipit nulla cumque.</p>
            </div>
            <div className="container-btn">
               <button>Contact Me</button>
            </div>
         </div>
         <div className="container-image">
            <Image
            src={ImageReki}
            width={350}
            height={450}
            alt="your-image"
            />
         </div>
      </div>
   )
}