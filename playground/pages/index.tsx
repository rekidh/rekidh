import { Inter } from '@next/font/google'
import Nav from '@/component/Nav/Nav';
import Section1 from '@/component/Section1/Section1';
import Section2 from '@/component/Section2/Section2';
import Section3 from '@/component/Section3/Section3';
import Section4 from '@/component/Section4/Section4';
import Footer from '@/component/Footer/Footer';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return ( 
    <>
      <Nav/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </>
  )
}
