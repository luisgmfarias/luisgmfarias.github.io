import type { NextPage } from 'next'
import { Landing } from '../sections/landing/landing';
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Luis | @euodeiobug</title>
        <meta name="description" content="Luis Medeiros is a Software Engineer focused on Web Development and Data." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Landing />
      </main>

      <footer >
      </footer>
    </div>
  )
}

export default Home
