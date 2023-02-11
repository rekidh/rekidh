import { Inter } from '@next/font/google'
import Nav from '@/component/Nav/Nav';
import Section1 from '@/component/Section1/Section1';
import CarauselCard from '@/component/CarauselCard/CarauselCard';
import Section3 from '@/component/Section3/Section3';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return ( 
    <>
      <Nav/>
      <Section1/>
      <CarauselCard/>
      <Section3/>
    </>
  )
}
