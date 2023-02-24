import { NextApiRequest,NextApiResponse } from "next";
import NextCors from "nextjs-cors";

type Data =
   {
   jobTitle:string
   starDate:string
   point:string[]
   link:string,
   perusahaan:string
}

export default async function handler(
   req:NextApiRequest,
   res:NextApiResponse<Data[]>
){

   await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200,
   });
  res.status(200).json(
   
      [  
         {
            jobTitle:'IT SUPPORT',
            starDate:'Apr 2020 - Present',
            point:[
               'Distributing network needs in the office area',
               'Fix application problems, such as installing the operating system and other work support tools',
               'Help with office administration',
               'Retrieve existing data from a separate document and enter it into Excel',
               'Prepare online meeting equipment'
            ],
            link:'https://kodim.com/kodim-0310-sijunjung',
            perusahaan:"Kodim 0310"
         },
         {
            jobTitle:'FRONTLINE',
            starDate:'July 2018 - Apr 2019',
            point:[
               'To be at the forefront of the company to meet customer needs',
               'Calculate daily profit and match the number of goods using excel',
               'Educate JITU PULSA membership to always be skilled in using transactions through ',
               'Responsibility for one branch of the company',
               'Looking for new membership'
            ],
            link:'https://jitupulsa.net/',
            perusahaan:"JITU PULSA"
         }
         ,
         {
            jobTitle:'NEXT YOUR COMPANY',
            starDate:'now',
            point:[
               'web development',
               'and',
               'anymore'
            ],
            link:'https://jitupulsa.net/',
            perusahaan:"Your Company"
         }
      ]
)}