import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.025,
        when: "beforeChildren",
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <Layout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={childVariants} className="motion-wrapper">
          <h2>Concept</h2>
        </motion.div>
        <motion.p variants={childVariants}>
          Normally, when engaging in the marketplace of ideas, one provides two
          key pieces of information: the idea itself, and the identity of the
          contributor. There are a number of scenarios in which one may need to
          obfuscate one, or both, of these data.
        </motion.p>
        <motion.p variants={childVariants}>
          Sharing an idea without revealing personal identity can be done fairly
          easily by posting anonymously. In many cases, however, it may not be
          possible to prove authorship after the fact if the need arises.
        </motion.p>
        <motion.p variants={childVariants}>
          Similarly, there are cases wherein one may need make a claim or
          prediction, but is intolerant of the risk involved in doing so.
          Typical options in such cases are to either take on the risk, or to
          abstain from engaging altogether.
        </motion.p>
        <motion.p variants={childVariants}>
          The ideal solution to both cases would be to indefinitely maintain the
          optionality of revealing any portion of the communication. Thanks to
          cryptography, this can be achieved securely and accessibly. Creating a
          hash of any portion of the communication allows the author to
          deobfuscate communications as appropriate, by simply providing text
          with a matching hash.
        </motion.p>
        <motion.div variants={childVariants} className="motion-wrapper">
          <h2>"Prove the Work"</h2>
        </motion.div>
        <motion.p variants={childVariants}>
          In the context of blockchain, proof of work is the consensus mechanism
          used to validate transactions and add new blocks to the chain. It
          works by using a hash to verify the successful completion of work.
        </motion.p>
        <motion.p variants={childVariants}>
          In this context, the "work" done is the creation of a new idea.
        </motion.p>
        <motion.div variants={childVariants} className="motion-wrapper">
          <h2>Safety</h2>
        </motion.div>
        <motion.p variants={childVariants}>
          Prove the Work utilizes SHA-256 in generating tokens. Setting out to
          determine the original message from the token is an impractical
          enterprise.
        </motion.p>

        <motion.a
          variants={childVariants}
          href="https://en.wikipedia.org/wiki/Cryptographic_hash_function"
          target="_blank"
        >
          Learn more
        </motion.a>
        <motion.div variants={childVariants} className="motion-wrapper">
          <h2 variants={childVariants}>Use Cases</h2>
        </motion.div>

        <motion.div variants={childVariants} className="motion-wrapper">
          <div className="image-wrapper">
            {" "}
            <img src="/images/usecase-1a.png"></img>
            <img src="/images/usecase-1b.png"></img>
          </div>
        </motion.div>
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
      </motion.div>
    </Layout>
  );
}
