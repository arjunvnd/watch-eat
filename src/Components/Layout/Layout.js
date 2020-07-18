import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
// import PropTypes from 'prop-types'

function Layout({ children }) {
  return (
    <>
      <section style={{ height: "64px" }}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Watch!Eat</Typography>
          </Toolbar>
        </AppBar>
      </section>

      <main className="main-container">{children}</main>
    </>
  );
}

Layout.propTypes = {};

export default Layout;
