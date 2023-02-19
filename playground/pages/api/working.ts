import { NextApiRequest,NextApiResponse } from "next";
import NextCors from "nextjs-cors";

type Data ={
   jobTitle:string
   starDate:string
   point:[string,string,string,string,string]
   link:string
   }

// let data:Data[]  =[ 
//             {
//             jobTitle:'Kodim 0310 Sijunjung',
//             starDate:'12 april 2020',
//             point:[
//                'Distributing network needs in the office area',
//                'Fix application problems, such as installing the operating system and other work support tools',
//                'Help with office administration',
//                'Retrieve existing data from a separate document and enter it into Excel',
//                'Prepare online meeting equipment'
//             ],
//             link:'https://kodim.com/kodim-0310-sijunjung'
//          },
//          {
//             jobTitle:'Kodim 0310 Sijunjung',
//             starDate:'12 april 2020',
//             point:[
//                'Distributing network needs in the office area',
//                'Fix application problems, such as installing the operating system and other work support tools',
//                'Help with office administration',
//                'Retrieve existing data from a separate document and enter it into Excel',
//                'Prepare online meeting equipment'
//             ],
//             link:'https://kodim.com/kodim-0310-sijunjung'
//          }
//       ]



export default async function handler(
   req:NextApiRequest,
   res:NextApiResponse<Data>
){

   await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   });
  res.status(200).json(
         {
            jobTitle:'Kodim 0310 Sijunjung',
            starDate:'12 april 2020',
            point:[
               'Distributing network needs in the office area',
               'Fix application problems, such as installing the operating system and other work support tools',
               'Help with office administration',
               'Retrieve existing data from a separate document and enter it into Excel',
               'Prepare online meeting equipment'
            ],
            link:'https://kodim.com/kodim-0310-sijunjung'
         })
}