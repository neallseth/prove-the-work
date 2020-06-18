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

  function validateToken() {
    if (sha256(entry) === token) {
      console.log("success!");
    } else {
      console.log("no match");
    }
  }

  return (
    <div className="container">
      <div className="top-sec">
        <h2>Validate</h2>
      </div>
      <div className="main-sec">
        <MainTextArea
          style={messageEntryStyles}
          spellCheck="false"
          placeholder='e.g., "The Washington Capitals will win the 2024 Stanley Cup"'
          onChange={(e) => {
            setEntry(e.target.value);
          }}
          value={entry}
        ></MainTextArea>
        <MainTextArea
          style={tokenEntryStyles}
          spellCheck="false"
          placeholder='"856e2bccf66..."'
          onChange={(e) => setToken(e.target.value)}
        ></MainTextArea>
      </div>
      <MainButton onClick={validateToken} contents="Validate" />

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
          justify-content: space-between;
          align-items: center;
        }

        .main-sec {
          display: flex;
          width: 90%;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
