import React from "react";
import Login from "../../pages/login/login";
import Signup from "../../pages/signup/signup";
import Home from "../../pages/home/home";
import "./app.scss";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app-wrapper">
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
