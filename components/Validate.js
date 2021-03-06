import { useState } from "react";
import MainTextArea from "../components/MainTextArea";
import MainButton from "./MainButton";
import { sha256 } from "js-sha256";
import { motion } from "framer-motion";

export default function Validate() {
  const [entry, setEntry] = useState("");
  const [token, setToken] = useState("");
  const [validation, setValidation] = useState("unchecked");

  const messageEntryStyles = {
    height: "10rem",
    width: "65%",
    borderColor: getBorderColor(),
  };
  const tokenEntryStyles = {
    height: "10rem",
    width: "30%",
    backgroundColor: "transparent",
    borderColor: getBorderColor(),
  };

  function getBorderColor() {
    if (validation === "pass") {
      return "#00ce0040";
    } else if (validation === "fail") {
      return "#cc00005e";
    } else {
      return "#e8e8e8";
    }
  }

  function validateToken() {
    if (sha256(entry) === token) {
      setValidation("pass");
    } else {
      setValidation("fail");
    }
  }

  function getValidationIcon() {
    let icon;
    if (validation === "pass") {
      return (
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          src="/icons/check.svg"
          alt="pass"
          style={{ height: "35px" }}
        ></motion.img>
      );
    } else if (validation === "fail") {
      return (
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          src="/icons/cross.svg"
          alt="fail"
          style={{ height: "35px" }}
        ></motion.img>
      );
    }
  }

  return (
    <div className="container">
      <div className="top-sec">
        <h2>Validate Token</h2>
        <div className="icon-sec"> {getValidationIcon()}</div>
      </div>
      <div className="main-sec">
        <MainTextArea
          style={messageEntryStyles}
          spellCheck="false"
          placeholder='e.g., "The Washington Capitals will win the 2024 Stanley Cup"'
          onChange={(e) => {
            setEntry(e.target.value);
            setValidation("unchecked");
          }}
          value={entry}
        ></MainTextArea>
        <MainTextArea
          style={tokenEntryStyles}
          spellCheck="false"
          placeholder='"856e2bccf66..."'
          onChange={(e) => {
            setToken(e.target.value);
            setValidation("unchecked");
          }}
        ></MainTextArea>
      </div>
      <MainButton
        onClick={validateToken}
        contents="Validate"
        isDisabled={!entry || !token}
      />

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 4rem;
          margin-bottom: 2rem;
        }

        .top-sec {
          display: flex;
          width: 100%;
          justify-content: flex-start;
          align-items: center;
        }

        .icon-sec {
          margin-left: 1.5rem;
        }

        .main-sec {
          display: flex;
          width: 90%;
          justify-content: space-between;
          align-items: center;
        }
        @media (max-width: 415px) {
          .main-sec {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
