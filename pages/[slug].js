import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '@/styles/Home.module.css'

import TestCompOne from '@/components/TestCompOne'
const TestCompTwo = dynamic(() => import('@/components/TestCompTwo'), {
  loading: () => <span>...placeholder for Test Comp 2...</span>,
  ssr: true,
}) 
const TestCompThree = dynamic(() => import('@/components/TestCompThree'), {
  loading: () => <span>...3rd place holder...</span>,
  ssr: false,
})



export default function Home() {
  return (
    <>
      <Head>
        <title>Dyanmic Import SSR</title>

      </Head>
      <main className={styles.main}>
        <div id="comp1" className={styles.compy}>
          <TestCompOne />
        </div>
        <div id="comp2" className={styles.compy}>
          <TestCompTwo />
        </div>
        <div id="comp3" className={styles.compy}>
          <TestCompThree />
        </div>
      </main>
    </>
  )
}


export async function getStaticPaths(context) {


    const paths = [
      { params: { slug: 'test' } },
      { params: { slug: 'test2' } },
      { params: { slug: 'test3' } }
    ];

    return {
      paths,
      fallback: 'blocking',
    };

}

export async function getStaticProps(context) {
  
    return {
      props: {
        slug: context.params.slug
      },
    }
  }

