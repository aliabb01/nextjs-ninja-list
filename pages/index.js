import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia eum assumenda, consectetur itaque est quasi ea nisi maiores provident labore.</p>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia eum assumenda, consectetur itaque est quasi ea nisi maiores provident labore.</p>
        <Link className={styles.btn} href="ninjas">
          See Ninja Listing
        </Link>
      </div>
    </>
  )
}
