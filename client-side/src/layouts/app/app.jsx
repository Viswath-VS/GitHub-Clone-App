import React from "react";
import "./app.scss";
import { Switch, Route } from "react-router-dom";
import Login from "../../pages/login/login";
import Signup from "../../pages/signup/signup";
import Home from "../../pages/home/home";
import Compose from "../../pages/compose/compose";
import Packages from "../../pages/packages/packages";
import Repository from "../../pages/repository/repository";
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
        <Route exact path="/repository">
          <Repository />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
