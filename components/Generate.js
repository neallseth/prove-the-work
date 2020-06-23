import { useState } from "react";
import MainButton from "./MainButton";
import { sha256 } from "js-sha256";
import MainTextArea from "../components/MainTextArea";

export default function Generate(props) {
  const [entry, setEntry] = useState("");
  const [hash, setHash] = useState("");

  async function handleCopyToken() {
    await navigator.clipboard.writeText(hash);
  }

  return (
    <div className="container">
      <div className="top-sec">
        <h2>Create</h2>
        {hash ? (
          <button className="token-btn" onClick={handleCopyToken}>
            <span className="token">{hash}</span>
          </button>
        ) : null}
      </div>
      <MainTextArea
        style={{ width: "90%", height: "10rem" }}
        spellCheck="false"
        placeholder='e.g., "This message was written by John Doe in April of 2024"'
        onChange={(e) => {
          setEntry(e.target.value);
          setHash("");
        }}
        value={entry}
      ></MainTextArea>
      <MainButton
        onClick={() => {
          setHash(sha256(entry));
        }}
        contents="Generate Token"
        isDisabled={!entry.length > 0}
      />

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .top-sec {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
        }

        .token-btn {
          cursor: pointer;
          width: 60%;
          text-overflow: ellipsis;
          overflow: hidden;
          border: 1px solid #dadada;
          background-color: whitesmoke;
          padding: 5px;
          border-radius: 0.25rem;
          box-shadow: 2px 2px 5px rgba(150, 176, 228, 0.6);
        }

        .token-btn:focus {
          outline: none;
        }

        .token-btn:active {
          background-color: #f5f5f500;
          box-shadow: 2px 2px 2px rgba(150, 176, 228, 0.6);
        }
      `}</style>
    </div>
  );
}
