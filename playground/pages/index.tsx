import { Inter } from '@next/font/google'
import BigerCard from '@/component/BigerCard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return ( 
    <BigerCard>
      hello
    </BigerCard>
  )
}
