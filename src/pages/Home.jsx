import React from "react";
import FeaturedMovies from "../components/FeaturedMovies";
import MovieOfTheDay from "../components/Week";
import TrendingMovies from "../components/Trending";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <>
      <FeaturedMovies></FeaturedMovies>
      <TrendingMovies></TrendingMovies>
      <MovieOfTheDay></MovieOfTheDay>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
    </>
  );
};

export default Home;
