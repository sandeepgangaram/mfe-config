import React, { Suspense } from "react";
import "./App.scss";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";

const HomePage = React.lazy(() => import("homepage/HomePage"));
const MovieDetails = React.lazy(() => import("movie_details/MovieDetails"));
const SeatSelection = React.lazy(() => import("seat_selection/SeatSelection"));

const App = () => {
  const history = useHistory();
  const location = useLocation();

  const movieClicked = (movie) => {
    history.push(`details/${movie.id}`);
  };

  return (
    <Switch>
      <Route path="/details/:id">
        <Suspense fallback={null}>
          <MovieDetails location={location} />
        </Suspense>
      </Route>
      <Route path="/book">
        <Suspense fallback={null}>
          <SeatSelection />
        </Suspense>
      </Route>
      <Route path="/">
        <Suspense fallback={null}>
          <HomePage
            movieClicked={movieClicked}
            routing={{ history, location }}
          />
        </Suspense>
      </Route>
    </Switch>
  );
};

export default App;
