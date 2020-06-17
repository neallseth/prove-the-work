export default function MainButton(props) {
  return (
    <button {...props}>
      {props.contents}
      <style jsx>
        {`
          button {
            border-radius: 0.4rem;
            height: 2rem;
            width: 100%;
            max-width: 15rem;
            border: none;
            background-color: rgba(0, 84, 255, 0.01);
            cursor: pointer;
            transition: all 0.15s ease-in;
            box-shadow: 2px 2px 5px #b5b5b5;
            letter-spacing: 0.1em;
            margin: 1.5rem;
            outline: none;
          }
          button:hover {
            background-color: rgba(150, 176, 228, 0.1);
            // box-shadow: 2px 2px 2px #b5b5b5;
          }
        `}
      </style>
    </button>
  );
}
