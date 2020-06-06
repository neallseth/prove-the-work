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
          <h1>Prove the Work</h1>
          <p>Flexible engagement in the marketplace of ideas</p>
        </div>

<Generate/>

        <style jsx>{`
   @font-face {
    font-family: "Cairo";
    src: url("/fonts/Cairo-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Cairo-Bold";
    src: url("/fonts/Cairo-SemiBold.ttf") format("truetype");
  }

  h1 {
    font-family: "Cairo-SemiBold", sans-serif;
  }
  
  p {
    font-family: "Cairo", sans-serif;
  }
   `}

        </style>
      </Layout>

    </>
  )
}
