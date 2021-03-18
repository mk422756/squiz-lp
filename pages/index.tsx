import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Button from '../components/button'
import Headline from '../components/headline'
import Section from '../components/section'
import Reason from '../components/reason'
import QA from '../components/qa'
import Layout from '../components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
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
                書類提出不要で<br></br>会員登録後にすぐ始められます！
              </Reason>
            </div>
            <div className="pt-9">
              <Reason index={3} imageSrc="/images/reason3.svg">
                クレジットカード決済で<br></br>販売も簡単に行えます！
              </Reason>
            </div>
          </Section>
          <Section className="bg-blue_1 mt-20">
            <div className="py-16">
              <Headline>よくある質問</Headline>

              <div className="mt-8">
                <QA
                  q="どうやって問題集をつくりますか？"
                  a="Webサイト上で全ておこないます。現在、択一式問題と複数選択回答に対応しています。"
                ></QA>
              </div>
              <div className="mt-8">
                <QA
                  q="問題を入力するのが大変です。"
                  a="問題が多数ある場合は、所定のフォーマットのExcel やGoogleスプレッドシートに入力していただければ、入力代行サービスを行います。"
                ></QA>
              </div>
              <div className="mt-8">
                <QA
                  q="どのような問題をつくればいいですか？"
                  a="どのようなジャンルでも作成可能です。英語や簿記などの資格系の問題や、受験勉強用、趣味の問題など、あなたの得意なジャンルの問題を作成可能です。"
                ></QA>
              </div>
            </div>
          </Section>
          <Section>
            <div className="py-16">
              <div className="text-2xl font-semibold text-gray_1 text-center">
                2021年5月リリース予定<br></br>事前登録受付中!!
              </div>
              <div className="mt-4 text-center">
                <Button>
                  <a href="https://google.com">今すぐ事前登録へ</a>
                </Button>
              </div>
            </div>
          </Section>
        </main>
      </Layout>
    </>
  )
}
