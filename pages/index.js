import Head from 'next/head'
// import "../styles/index.module.css"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Prove the Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<div className="hero">
<h1>Prove the Work</h1>
<p>Secure, flexible engagement in the marketplace of ideas</p>
</div>
   
   <style jsx>{`
   @font-face {
    font-family: "Cairo";
    src: url("../assets/fonts/Cairo-Regular.ttf") format("truetype");
  }
  
  h1, p {
    font-family: "Cairo", sans-serif;
  }
   `}

   </style>
    </div>
  )
}
