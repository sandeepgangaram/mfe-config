import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route path="/details"></Route>
      <Route path="/book"></Route>
      <Route path="/"></Route>
    </Switch>
  );
};

export default App;
