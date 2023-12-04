import Featured from '@/components/Featured'
import Offer from '@/components/Offer'
import Slider from '@/components/Slider'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zenbowls',
}

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <Slider/>
      <Featured/>
      <Offer/>
    </main>
    )
}
