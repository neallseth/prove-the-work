import Link from "next/link";

export default function NavBar() {
  return (
    <header>
      <div className="linkSection">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>

      <style jsx>
        {`
          header {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 3.5rem;
            padding: 0rem 1rem;
          }

          .linkSection {
            display: flex;
            justify-content: space-between;
            max-width: 12rem;
            width: 75%;
          }

          a {
            font-family: "Cairo", sans-serif;
            text-decoration: none;
            // padding: 0rem 1rem;
            color: rgba(0, 0, 0, 0.6);
            font-weight: bold;
          }
        `}
      </style>
    </header>
  );
}
