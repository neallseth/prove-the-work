import { useState } from "react";
export default function CopyClipboardButton(props) {
  const [tooltip, setTooltip] = useState("Copy to clipboard");

  async function handleCopyToken() {
    await navigator.clipboard.writeText(props.hash);
    setTooltip("Copied!");
    setTimeout(() => {
      setTooltip("Copy to clipboard");
    }, 1500);
  }

  return (
    <button className="token-btn" onClick={handleCopyToken}>
      <div className="token-wrapper">
        <span className="token">{props.hash}</span>
      </div>
      <span className="tooltip">{tooltip}</span>

      <style jsx>
        {`
          .token-btn {
            position: relative;
            cursor: pointer;
            width: 60%;
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

          .token-wrapper {
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .token-btn .tooltip {
            visibility: hidden;
            width: 150px;
            background-color: #547ce12b;
            color: black;
            text-align: center;
            border-radius: 6px;
            padding: 5px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            margin-left: -75px;
            opacity: 0;
            transition: all 0.15s;
          }

          .tooltip::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: #547ce12b transparent transparent transparent;
          }

          .token-btn:hover .tooltip {
            visibility: visible;
            opacity: 1;
          }
        `}
      </style>
    </button>
  );
}
