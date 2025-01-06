import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const FeaturedMovies = () => {
  const { movies } = useContext(AuthContext);
  const sortedMovies = movies.sort((a, b) => b.rating - a.rating).slice(0,6);
  return (
    <div className="">
      <h1 className="text-3xl text-center mb-5 dark:text-white">
        Featured Movies
      </h1>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-5 w-[85%] mx-auto">
        {sortedMovies.map((movie) => {
          return (
            <div
              data-aos="fade-up"
              class="card card-side max-lg:flex-col dark:bg-black shadow-xl p-5"
            >
              <figure class="lg:w-1/2">
                <img
                  src={movie.poster}
                  alt="Movie Poster"
                  class="rounded-lg object-cover h-full"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title text-2xl font-bold">{movie.title}</h2>
                <p class="text-sm italic">Genre: {movie.genre.join(", ")}</p>
                <p class="text-sm">Duration: {movie.duration} mins</p>
                <p class="text-sm">Release Year: {movie.release}</p>
                <p class="flex items-center">
                  Rating:
                  <span class="ml-1">{movie.rating}</span>
                </p>
                <div class="card-actions mt-4 justify-end">
                  <Link
                    to={`/movies/${movie._id}`}
                    class="btn btn-sm btn-outline btn-accent"
                  >
                    See Details
                  </Link>
                  <button class="btn btn-sm btn-outline btn-warning">
                    Add to Favorites
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedMovies;
