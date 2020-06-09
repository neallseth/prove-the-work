import MainButton from '../components/MainButton';

export default function Generate(props) {
    return (
        <div className="gen-section">
            <textarea spellcheck="false" placeholder='e.g., "I predict the Washington Capitals will win the 2024 Superbowl"'></textarea>
        <MainButton contents="Generate Token" hoverColor="lightBlue"/>
    <style jsx>{`
    .gen-section{
        display: flex;
        flex-direction: column;
        align-items: center
    }

    textarea{
        width: 90%;
        height: 10rem;
        border-radius: .75rem;
        background-color: transparent;
        font-size: 1rem;
        padding: .75rem;
        line-height: 1.25;
        color: black;
        border: 1px solid #e8e8e8;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        outline: none;
        resize: none;
    }

    textarea:focus{
        box-shadow: 0 0 0 3px #d3dfef;
    
    }

    button{
        margin: 2rem;
    }

    `}</style>
        </div>
    )
}