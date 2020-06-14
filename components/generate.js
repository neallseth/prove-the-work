import { useState } from "react";
import MainButton from "./MainButton";
import { sha256 } from "js-sha256";

export default function Generate(props) {
  const [entry, setEntry] = useState("");
  const [hash, setHash] = useState("");

  return (
    <div className="gen-section">
      <textarea
        spellCheck="false"
        placeholder='e.g., "This message was written by John Doe in April of 2024'
        onChange={(e) => {
          setEntry(e.target.value);
          setHash("");
        }}
        value={entry}
      ></textarea>
      <MainButton
        className=".gen-button"
        onClick={() => {
          setHash(sha256(entry));
        }}
        contents="Generate Token"
      />

      {hash ? <p className="token">{hash}</p> : null}

      <style jsx>{`
        .gen-section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        textarea {
          width: 90%;
          height: 10rem;
          border-radius: 0.75rem;
          background-color: rgba(0, 84, 255, 0.01);
          font-size: 1rem;
          padding: 0.75rem;
          line-height: 1.25;
          color: black;
          border: 1px solid #e8e8e8;
          transition: all 0.15s ease-in;
          outline: none;
          resize: none;
        }

        textarea:hover {
          background-color: rgba(150, 176, 228, 0.1);
        }
        textarea:focus {
          box-shadow: 0 0 0 3px #d3dfef;
          background-color: rgba(150, 176, 228, 0.1);
        }

        .token {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
