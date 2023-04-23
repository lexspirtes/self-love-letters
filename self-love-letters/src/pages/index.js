import Image from 'next/image'
import { Inter } from 'next/font/google'
import { WriteLetter } from './write-a-letter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <WriteLetter/>
      </div>
    </main>
    </div>
  )
}

