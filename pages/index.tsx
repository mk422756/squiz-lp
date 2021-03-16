import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main>
        <div className="text-center">
          <Image
            src="/images/top.svg"
            alt="トップ画像"
            width={252}
            height={198}
          ></Image>
        </div>
      </main>
    </Layout>
  )
}
