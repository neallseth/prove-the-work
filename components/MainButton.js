export default function MainButton(props) {
  return (
    <button className={props.hoverColor}>
      {props.contents}
      <style jsx>
        {`
          button {
            border-radius: 0.5rem;
            height: 2rem;
            width: 100%;
            max-width: 15rem;
            border: none;
            background-color: rgba(0, 84, 255, 0.01);
            cursor: pointer;
            transition: all 0.25s;
            box-shadow: 3px 3px 6px #b5b5b5;
            letter-spacing: 0.1em;
            margin: 1.5rem;
            outline: none;
          }
          .lightBlue:hover {
            background-color: rgba(0, 84, 255, 0.08);
            box-shadow: 2px 2px 4px #b5b5b5;
          }
        `}
      </style>
    </button>
  );
}
