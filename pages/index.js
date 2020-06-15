import Head from "next/head";
import Layout from "../components/layout";
import Generate from "../components/Generate";
import Validate from "../components/Validate";

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

        <Generate />
        <Validate />

        <style jsx>
          {`

        .hero{
          // height: 12rem;
          padding-top:2rem;
          padding-bottom: 5rem;
        }

        .title{
          margin-bottom .5rem;
        }

        h2{
          font-size: 2rem;
        }
        `}
        </style>
      </Layout>
    </>
  );
}
