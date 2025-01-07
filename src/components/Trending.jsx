import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const TrendingMovies = () => {
  const {movies} = useContext(AuthContext);
  const sortedMovies = movies.sort((a, b) => a.rating - b.rating).slice(-0, -6);

  return (
    <section className="py-10 max-w-7xl max-sm:w-[90%] mx-auto">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Trending Movies
        </h2>
        <p className="my-3 opacity-70 text-center mb-6">
          Explore the movies that are trending now worldwide.
        </p>
        <div className="w-full h-fit rounded-lg">
          <Marquee className="py-5">
            {sortedMovies.map((movie) => (
              <div className="relative mx-5 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-[1.03]">
                <img
                  src={movie.poster}
                  className="w-full h-[300px] object-cover"
                />
                <div className="text-white absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <h1 className="text-xl lg:text-2xl text-center">
                    {movie.title}
                  </h1>
                  <div className="flex justify-center items-center text-yellow-500 mb-2">
                    {[...Array(movie.rating)].map((_, i) => (
                      <span key={i} className="text-md">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="opacity-80 text-center text-md gap-1 mb-3">
                    {movie.duration}
                    <br />
                    {movie.genre.join(", ")}
                  </p>
                  <Link to={`/movies/${movie._id}`}>
                    <button className="btn btn-sm btn-primary">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TrendingMovies;
