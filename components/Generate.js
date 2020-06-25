import { useState } from "react";
import MainButton from "./MainButton";
import { sha256 } from "js-sha256";
import MainTextArea from "../components/MainTextArea";
import CopyClipboardButton from "../components/CopyClipboardButton";

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
          <CopyClipboardButton onClick={handleCopyToken} hash={hash} />
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
          margin-top: 4rem;
        }
        .top-sec {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
        }

        // .token-btn {
        //   cursor: pointer;
        //   width: 60%;
        //   text-overflow: ellipsis;
        //   overflow: hidden;
        //   border: 1px solid #dadada;
        //   background-color: whitesmoke;
        //   padding: 5px;
        //   border-radius: 0.25rem;
        //   box-shadow: 2px 2px 5px rgba(150, 176, 228, 0.6);
        // }

        // .token-btn:focus {
        //   outline: none;
        // }

        // .token-btn:active {
        //   background-color: #f5f5f500;
        //   box-shadow: 2px 2px 2px rgba(150, 176, 228, 0.6);
        // }

        // .tooltip {
        //   visibility: hidden;
        //   width: 7rem;
        //   background-color: black;
        //   color: #fff;
        //   text-align: center;
        //   border-radius: 6px;
        //   padding: 5px 0;
        //   position: absolute;
        //   z-index: 1;
        //   bottom: 150%;
        //   left: 50%;
        //   margin-left: -3.5rem;
        // }

        // .tooltip::after {
        //   content: "";
        //   position: absolute;
        //   top: 100%;
        //   left: 50%;
        //   margin-left: -5px;
        //   border-width: 5px;
        //   border-style: solid;
        //   border-color: black transparent transparent transparent;
        // }

        // .token-btn:hover .tooltip {
        //   visibility: visible;
        // }
      `}</style>
    </div>
  );
}
