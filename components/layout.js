import NavBar from '../components/NavBar';

export default function Layout(props) {
    return (
        <>
        <NavBar/>
        <div className="container">
            {props.children}
            
            <style jsx>
                {`
                    .container {
                        padding: 0rem 2rem;
                        margin: auto;
                        max-width: 40rem;
                    }
            `}
            </style>
        </div>

        </>
    )

}