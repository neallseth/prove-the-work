export default function NavBar() {
    return (
    <header>
        <a>Home</a>
        <a>About</a>

        <style jsx>
        {`

header{
    display: flex;
    align-items: center;
    height: 3.5rem;
    padding: 0rem 1rem;

}

        a{
            font-family: "Cairo", sans-serif;
            padding: 0rem 1rem;

        }
        `}

        </style>
    </header>
    )

}