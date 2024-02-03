import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

function Navbar() {
  const { data: session, loading } = useSession();
  console.log({ session, loading });
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>

      <ul className={`main-nav ${!session && loading ? "loading" : "loaded"}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/Blog">Blog</Link>
        </li>
        {!loading && !session && (
          <li>
            <Link href="/api/auth/signin">
              <span
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign up{" "}
              </span>
            </Link>
          </li>
        )}

        {session && (
          <li>
            <Link href="/api/auth/signout">
              <span
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
