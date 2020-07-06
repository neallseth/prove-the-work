import { useState } from "react";
import MainButton from "./MainButton";
import { sha256 } from "js-sha256";
import MainTextArea from "../components/MainTextArea";
import CopyClipboardButton from "../components/CopyClipboardButton";

export default function Generate(props) {
  const [entry, setEntry] = useState("");
  const [hash, setHash] = useState("");

  return (
    <div className="container">
      <div className="top-sec">
        <h2>Create</h2>
        {hash ? <CopyClipboardButton hash={hash} /> : null}
      </div>
      <div className="main-sec">
        <MainTextArea
          spellCheck="false"
          placeholder='e.g., "This message was written by John Doe in April of 2024"'
          onChange={(e) => {
            setEntry(e.target.value);
            setHash("");
          }}
          value={entry}
        ></MainTextArea>
      </div>
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
          margin-top: 4rem;
        }
        .top-sec {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
        }

        .main-sec {
          height: 10rem;
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
