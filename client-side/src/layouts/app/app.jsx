import React from "react";
import Login from "../../pages/login/login";
import Signup from "../../pages/signup/signup";
import Home from "../../pages/home/home";
import Compose from "../../pages/compose/compose";
import "./app.scss";
import { Switch, Route } from "react-router-dom";
import Packages from "../../pages/packages/packages";

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
        <Route exact path="/compose">
          <Compose />
        </Route>
        <Route exact path="/packages">
          <Packages />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
