import React, { Suspense } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";

const HomePage = React.lazy(() => import("homepage/HomePage"));

const App = () => {
  return (
    <Switch>
      <Route path="/details"></Route>
      <Route path="/book"></Route>
      <Route path="/">
        <Suspense fallback={null}>
          <HomePage />
        </Suspense>
      </Route>
    </Switch>
  );
};

export default App;
