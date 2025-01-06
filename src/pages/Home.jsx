import React from "react";
import FeaturedMovies from "../components/FeaturedMovies";
import MovieOfTheDay from "../components/Week";
import TrendingMovies from "../components/Trending";

const Home = () => {
  return (
    <div className="pt-10">
      <FeaturedMovies></FeaturedMovies>
      <TrendingMovies></TrendingMovies>
      <MovieOfTheDay></MovieOfTheDay>
    </div>
  );
};

export default Home;
