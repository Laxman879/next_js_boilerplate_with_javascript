import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push("/login");
  };

  return (
    <div>
      <nav className="navbar">
        <Link href="/" className="logo">
          Navbar
        </Link>
        <div>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
          <button className="login-button" onClick={navigateToLogin}>
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
