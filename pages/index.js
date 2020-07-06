import Layout from "../components/Layout";
import Generate from "../components/Generate";
import Validate from "../components/Validate";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="hero">
          <div className="title-sec">
            <h1 className="title">Prove the Work</h1>
            <p>Flexible engagement in the marketplace of ideas</p>
          </div>
          <div className="logo-sec">
            <img src="/icons/blocks.svg" alt="logo" className="logo"></img>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Generate />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Validate />
      </motion.div>
      <style jsx>
        {`
          .hero {
            display: flex;
            justify-content: space-between;
            padding: 2rem;
            background-color: #c7c7c717;
            border-radius: 1.5rem;
            box-shadow: 1px 1px 10px #c1c1c173;
            margin-top: 2.5rem;
          }

          .title-sec {
            text-align: center;
            width: 75%;
          }

          .logo-sec {
            width: 25%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .title {
            margin: 0;
          }

          .logo {
            height: 5rem;
          }

          @media (max-width: 400px) {
            .hero {
              flex-direction: column;
              justify-content: space-between;
              padding: 1rem;
            }

            .title-sec,
            .logo-sec {
              width: 100%;
            }

            .logo {
              height: 4rem;
            }
          }
        `}
      </style>
    </Layout>
  );
}
