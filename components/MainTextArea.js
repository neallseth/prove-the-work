export default function MainTextArea(props) {
  return (
    <>
      <textarea {...props}></textarea>
      <style jsx>
        {`
          textarea {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            background-color: rgba(0, 84, 255, 0.01);
            font-size: 1rem;
            padding: 0.75rem;
            line-height: 1.25;
            color: black;
            border: 1px solid #e8e8e8;
            transition: all 0.15s ease-in;
            outline: none;
            resize: none;
            box-shadow: 2px 2px 8px #b5b5b5ab;
            -webkit-appearance: none;
          }

          textarea:hover {
            background-color: rgba(150, 176, 228, 0.1);
          }
          textarea:focus {
            box-shadow: 0 0 0 3px #d3dfef;
            background-color: rgba(150, 176, 228, 0.1);
          }
        `}
      </style>
    </>
  );
}
