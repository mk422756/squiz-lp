import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'
import Button from '../components/button'

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
        <div className="mt-8">
          <h1 className="text-3xl font-semibold text-gray_1">
            問題集を作って、
            <br />
            販売してみませんか？
          </h1>
          <p className="mt-6 text-md text-text text-gray_2">
            SQUIZは問題集を作成して販売できます。
            <br />
            あなたの得意なことを問題にしてみましょう！
          </p>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-gray_1">
            事前登録いただくと、
            <br />
            サービス開始時にご連絡いたします。
          </p>
          <div className="mt-4">
            <Button>
              <a href="https://google.com">今すぐ事前登録へ</a>
            </Button>
          </div>
        </div>
      </main>
    </Layout>
  )
}
