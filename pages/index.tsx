import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Button from '../components/button'
import Headline from '../components/headline'
import Section from '../components/section'
import Reason from '../components/reason'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main>
        <Section>
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
            <p className="mt-6 text-md text-text text-gray_2 leading-6">
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
        </Section>
        <Section className="bg-blue_1 mt-20">
          <div className="pt-16">
            <Headline>問題集を作ってみましょう!</Headline>
          </div>
          <div className="mt-10 text-text text-gray_2 leading-6">
            SQUIZではあなたのスキルや知識を活かして収入を得ることができます。空いた時間をうまく活用したい、副業収入がほしい、でも仕事を請け負ったり、複雑なことはしたくない。SQUIZでは好きな時間に自分のペースで問題を作成して販売することができます。
          </div>
          <div className="mt-8 text-center pb-16">
            <div className="inline-block align-middle">
              <Image
                src="/images/screenshot1.svg"
                alt="スクリーンショット1"
                width={150}
                height={346}
              ></Image>
            </div>
            <div className="inline-block ml-4 align-middle">
              <Image
                src="/images/screenshot2.svg"
                alt="スクリーンショット2"
                width={150}
                height={305}
              ></Image>
            </div>
          </div>
        </Section>
        <Section>
          <div className="pt-16">
            <Headline>SQUIZなら簡単です</Headline>
          </div>
          <div className="pt-9">
            <Reason index={1} imageSrc="/images/reason1.svg">
              問題の作成から販売まで<br></br>全てオンラインで完結します！
            </Reason>
          </div>
          <div className="pt-9">
            <Reason index={2} imageSrc="/images/reason2.svg">
              書類位提出不要で<br></br>会員登録後にすぐ始められます！
            </Reason>
          </div>
          <div className="pt-9">
            <Reason index={3} imageSrc="/images/reason3.svg">
              クレジットカード決済で<br></br>販売も簡単に行えます！
            </Reason>
          </div>
        </Section>
      </main>
    </>
  )
}
