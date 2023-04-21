import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '@/styles/Home.module.css'

import TestCompOne from '@/components/TestCompOne'
//import TestCompTwo from '@/components/TestCompTwo'

const TestCompTwo = dynamic(() => import('@/components/TestCompTwo'), {
  loading: () => <span>...placeholder for Test Comp 2...</span>,
  ssr: true,
}) 


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>

      </Head>
      <main className={styles.main}>
        <div id="comp1" className={styles.compy}>
          <TestCompOne />
        </div>
        <div id="comp2" className={styles.compy}>
          <TestCompTwo />
        </div>
      </main>
    </>
  )
}
