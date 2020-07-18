import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ComponentList from "./Components/ComponentList/ComponentList";
import About from "./Components/About/About";
import Layout from "./Components/Layout/Layout";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/components">
              <ComponentList />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
