import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ComponentList from "./Components/ComponentList/ComponentList";
import About from "./Components/About/About";
import Layout from "./Components/Layout/Layout";
import { ThemeProvider } from "@material-ui/core";
import { themeGreen, themePurple, themeRed } from "./theme/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
// import history from "./utils/history";

function App({ history }) {
  const switchTheme = () => {
    console.log(
      "this is a render",
      history.location.pathname.split("/").indexOf("red") > -1
    );
    if (history.location.pathname.split("/").indexOf("red") > -1) {
      return themeRed;
    } else if (history.location.pathname.split("/").indexOf("green") > -1) {
      return themeGreen;
    }
    return themePurple;
  };

  return (
    <ThemeProvider theme={switchTheme()}>
      <CssBaseline />
      <Layout>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/components">
            <ComponentList />
          </Route>
          <Route exact path="/components/:color">
            <ComponentList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default withRouter(App);
