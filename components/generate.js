import MainButton from "../components/MainButton";

export default function Generate(props) {
  return (
    <div className="gen-section">
      <textarea
        spellcheck="false"
        placeholder='e.g., "I predict the Washington Capitals will win the 2024 Stanley Cup"'
      ></textarea>
      <MainButton contents="Generate Token" hoverColor="lightBlue" />
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
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
          outline: none;
          resize: none;
        }

        textarea:focus {
          box-shadow: 0 0 0 3px #d3dfef;
          background-color: rgba(150, 176, 228, 0.1);
        }

        button {
          margin: 2rem;
        }
      `}</style>
    </div>
  );
}
