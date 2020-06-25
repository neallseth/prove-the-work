export default function CopyClipboardFunction(props) {
  return (
    <button className="token-btn" {...props}>
      <span className="token">{props.hash}</span>
      <span className="tooltip">Tooltip text</span>

      <style jsx>
        {`
          .token-btn {
            position: relative;
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

          .token-btn .tooltip {
            visibility: hidden;
            width: 120px;
            background-color: black;
            color: black;
            text-align: center;
            border-radius: 6px;
            padding: 5px 0;
            position: absolute;
            z-index: 1;
            bottom: 100%;
            left: 50%;
            margin-left: -60px;
          }

          .tooltip::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: black transparent transparent transparent;
          }

          .token-btn:hover .tooltip {
            visibility: visible;
          }
        `}
      </style>
    </button>
  );
}
