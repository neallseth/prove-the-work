import { useState } from "react";
import MainTextArea from "../components/MainTextArea";
import MainButton from "./MainButton";
import { sha256 } from "js-sha256";

export default function Validate() {
  const messageEntryStyles = { height: "10rem", width: "65%" };
  const tokenEntryStyles = {
    height: "10rem",
    width: "30%",
    backgroundColor: "transparent",
  };

  const [entry, setEntry] = useState("");
  const [token, setToken] = useState("");
  const [validation, setValidation] = useState("unchecked");

  function validateToken() {
    if (sha256(entry) === token) {
      setValidation("pass");
    } else {
      setValidation("fail");
    }
  }

  function getValidationIcon() {
    if (validation === "pass") {
      return (
        <img src="/icons/check.svg" alt="pass" style={{ height: "50px" }}></img>
      );
    } else if (validation === "fail") {
      return (
        <img src="/icons/cross.svg" alt="fail" style={{ height: "50px" }}></img>
      );
    }
  }

  return (
    <div className="container">
      <div className="top-sec">
        <h2>Validate</h2>
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
          margin-top: 5rem;
        }

        .top-sec {
          display: flex;
          width: 100%;
          justify-content: flex-start;
          align-items: center;
        }

        .main-sec {
          display: flex;
          width: 90%;
          justify-content: space-between;
          align-items: center;
        }

        .icon-sec {
          margin-left: 2.75rem;
        }
      `}</style>
    </div>
  );
}
