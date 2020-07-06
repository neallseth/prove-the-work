import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CopyClipboardButton(props) {
  const [tooltip, setTooltip] = useState("Copy to clipboard");
  const copyInputRef = useRef(null);

  // async function handleCopyToken() {
  //   await navigator.clipboard.writeText(props.hash);
  //   setTooltip("Copied!");
  //   setTimeout(() => {
  //     setTooltip("Copy to clipboard");
  //   }, 1500);
  // }

  async function newCopy() {
    copyInputRef.current.select();
    document.execCommand("copy");
    setTooltip("Copied!");
    setTimeout(() => {
      setTooltip("Copy to clipboard");
    }, 1500);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <button className="token-btn" onClick={newCopy}>
        <input
          type="text"
          ref={copyInputRef}
          className="token"
          spellCheck={false}
          value={props.hash}
          contentEditable="true"
        />
        <span className="tooltip">{tooltip}</span>

        <style jsx>
          {`
            .token {
              width: 100%;
              background-color: transparent;
              border: none;
              overflow: hidden;
              text-overflow: ellipsis;
              cursor: pointer;
            }

            .token:focus {
              outline: none;
            }
            .token-btn {
              position: relative;
              cursor: pointer;
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
    </motion.div>
  );
}
