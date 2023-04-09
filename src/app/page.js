import Image from 'next/image'
import { Inter } from 'next/font/google'
import './api/scss/Variable.scss';

import Intro from './api/components/intro';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Intro />
    </>
  )
}
