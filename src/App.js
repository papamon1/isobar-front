import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import { Button, Spin } from "antd";
import "antd/dist/antd.css";
import LoginPage from "./pages/loginPage";
import WorkPage from "./pages/workPage";
import history from "./history";

function App() {
  const [loggedUser, setLoggedUser] = useState(null);

  return (
    <React.Fragment>
      {!loggedUser && (
        <Router history={history}>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Redirect exact from="/" to="/login" />
            <Redirect exact from="*" to="/login" />
          </Switch>
        </Router>
      )}

      {loggedUser && (
        <div>
          <Router history={history}>
            <Switch>
              <Route path="/work" component={WorkPage} />
              <Route path="/" />
              <Redirect exact from="*" to="/work" />
            </Switch>
          </Router>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
