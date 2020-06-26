import Layout from "../components/layout";
export default function About() {
  return (
    <Layout>
      <h2>Concept</h2>
      <p>
        Normally, when engaging in the marketplace of ideas, one provides two
        key pieces of information: the idea itself, and the identity of the
        contributor. There are a number of scenarios in which one may need to
        obfuscate one, or both, of these data.
      </p>
      <p>
        Sharing an idea without revealing personal identity can be done fairly
        easily by posting anonymously. In many cases, however, it may not be
        possible to prove authorship after the fact if the need arises.
      </p>
      <p>
        Similarly, there are cases wherein one may need make a claim or
        prediction, but is intolerant of the risk involved in doing so. Typical
        options in such cases are to either take on the risk, or to abstain from
        engaging altogether.
      </p>
      <p>
        The ideal solution to both cases would be to indefinitely maintain the
        optionality of revealing any portion of the communication. Thanks to
        cryptography, this can be achieved securely and accessibly. Creating a
        hash of any portion of the communication allows the author to
        deobfuscate communications as appropriate, by simply providing the
        original content.
      </p>

      <h2>"Prove the Work"</h2>
      <p>
        In the context of blockchain, proof of work is the consensus mechanism
        used to validate transactions and add new blocks to the chain. It works
        by using a hash to validate the successful completion of work.
      </p>
      <p>In this context, the "work" done is the creation of a new idea.</p>

      <h2>Safety</h2>
      <p>
        Prove the Work utilizes SHA-512 in generating tokens. Setting out to
        determine the original message from the token is an impractical
        enterprise.
      </p>

      <a href="https://en.wikipedia.org/wiki/Cryptographic_hash_function">
        Learn more
      </a>

      <h2>Use Cases</h2>
      <div className="image-wrapper">
        {" "}
        <img src="/images/usecase-1a.png"></img>
        <img src="/images/usecase-1b.png"></img>
      </div>

      <style jsx>
        {`
          h2 {
            margin: 2rem 0rem 1rem;
          }

          img {
            width: 100%;
            max-width: 25rem;
          }

          .image-wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      </style>
    </Layout>
  );
}
