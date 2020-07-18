import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Header from "./Header/Header";
// import PropTypes from 'prop-types'

function Layout({ children }) {
  return (
    <>
      <section style={{ height: "64px" }}>
        <Header />
      </section>

      <main className="main-container">{children}</main>
    </>
  );
}

Layout.propTypes = {};

export default Layout;
