import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import { Button, Spin } from "antd";
import "antd/dist/antd.css";
import LoginPage from "./pages/loginPage";
import WorkPage from "./pages/workPage";
import history from "./history";
import { checkUser } from "./store/asyncActions/userAsyncActions";

function App() {
  const loggedUser = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
  }, []);

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
              <Redirect exact from="/" to="/work" />
              <Redirect exact from="*" to="/work" />
            </Switch>
          </Router>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
