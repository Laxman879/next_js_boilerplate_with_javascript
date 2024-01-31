import React from "react";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children, isHome }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <main className={isHome ? "homepage" : ""}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
