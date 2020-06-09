export default function MainButton(props){
    return (<button className={props.hoverColor}>
{props.contents}
        <style jsx>
            {`
                button{
                    border-radius: .5rem;
                    height: 2rem;
                    width:100%;
                    max-width: 15rem;
                    border: none;
                    background-color: #e8e8e8;
                    cursor: pointer;
                    transition: all .25s;
                    box-shadow: 3px 3px 6px #b5b5b5;
                    letter-spacing: 0.1em;
                    margin: 1.5rem;
                    outline: none;
            
                }
                .lightBlue:hover{
                    background-color: #d3dfef;
                    box-shadow: 2px 2px 4px #b5b5b5;
                }    
            `}
        </style>
    </button>)
}