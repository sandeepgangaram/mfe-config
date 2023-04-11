import React, { Suspense } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";

const HomePage = React.lazy(() => import("homepage/HomePage"));
const MovieDetails = React.lazy(() => import("movie_details/MovieDetails"));
const SeatSelection = React.lazy(() => import("seat_selection/SeatSelection"));

const App = () => {
  return (
    <Switch>
      <Route path="/details">
        <Suspense fallback={null}>
          <MovieDetails />
        </Suspense>
      </Route>
      <Route path="/book">
        <Suspense fallback={null}>
          <SeatSelection />
        </Suspense>
      </Route>
      <Route path="/">
        <Suspense fallback={null}>
          <HomePage />
        </Suspense>
      </Route>
    </Switch>
  );
};

export default App;
