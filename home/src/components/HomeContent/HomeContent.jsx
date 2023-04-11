import React, { Suspense, useEffect, useState } from "react";
import QuickBooking from "../QuickBooking/QuickBooking.jsx";
import "./HomeContent.scss";

import RoutingContext from "../../utils/RoutingContext.js";

const MovieCard = React.lazy(() => import("components/MovieCard"));

const dummyItem = [{ name: "Dummy Movie" }];

const HomeContent = (props) => {
  const [movies, setMovies] = useState(dummyItem);

  useEffect(async () => {
    const res = await fetch("http://localhost:5555/movies");
    const data = await res.json();
    setMovies(data);
  }, []);

  const movieClicked = (item) => {
    if (typeof props.movieClicked === "function") {
      props.movieClicked(item);
    }
  };

  const renderMovieList = () => {
    let items = movies.map((item) => {
      return (
        <div onClick={() => movieClicked(item)} key={item.name}>
          <MovieCard title={item.name} imageUrl={item.imageUrl} />
        </div>
      );
    });

    return items;
  };

  return (
    <div className="home-content-container">
      <RoutingContext.Provider value={props.routing}>
        <QuickBooking></QuickBooking>
        <div className="movies-container">
          <Suspense fallback={<p>Loading...</p>}>{renderMovieList()}</Suspense>
        </div>
      </RoutingContext.Provider>
    </div>
  );
};

export default HomeContent;
