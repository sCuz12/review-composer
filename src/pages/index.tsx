import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
      <main >
        <h1>This is landing page</h1>
        <div>
          <Link href="/generate">
            <h3>Generate</h3>
          </Link>
        </div>
      </main>
    </>
  )
}
