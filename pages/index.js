import Head from 'next/head'
import Layout from '../components/layout'
import Generate from '../components/generate'

export default function Home() {
  return (
    <>
      <Head>
        <title>Prove the Work</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="../assets/fonts/Cairo-Regular.ttf" rel="stylesheet"></link>
      </Head>
      <Layout>
        <div className="hero">
          <h1 className="title">Prove the Work</h1>
          <p>Flexible engagement in the marketplace of ideas</p>
        </div>

<Generate/>

        <style jsx>{`

  .hero{
    height: 50vh;
    padding-top:7.5vh;
  }

  .title{
    font-size: 3rem;
    margin-bottom .5rem;
  }
   `}

        </style>
      </Layout>

    </>
  )
}
