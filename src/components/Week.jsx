import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const MovieOfTheDay = () => {
  const { movies } = useContext(AuthContext);
  if (!movies || movies.length === 0) {
    return (
      <section className="py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Movie of the Century
          </h2>
          <p className="text-gray-600">No movies available.</p>
        </div>
      </section>
    );
  }
  const movie = movies.sort((a, b) => b.rating - a.rating).slice(0, 1)[0];
  return (
    <section className="py-10 max-sm:w-[90%] max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Movie of the Century
        </h2>
        <p className="my-3 opacity-70 text-center mb-6">
          According to our users this is the best movie of all time.
        </p>
        <div class="flex max-sm:flex-col font-sans">
          <div class="w-56 relative">
            <img
              src={movie.poster}
              alt={movie.title}
              class="absolute inset-0 w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <form class="flex-auto p-6">
            <div class="flex flex-wrap">
              <h1 class="flex-auto font-medium text-2xl text-slate-900">
                {movie.title}
              </h1>
              <div class="text-sm font-medium text-slate-400">
                {movie.duration} min
              </div>
            </div>
            <div class="flex items-baseline justify-center mt-4 mb-6 pb-6 border-b border-slate-200">
              {[...Array(movie.rating)].map((_, i) => (
                <span key={i} className="text-lg">
                  ⭐
                </span>
              ))}
            </div>
            <div class="flex space-x-4 mb-5 text-sm font-medium">
              <div class="flex-auto flex space-x-4">
                <Link
                  to={`/movies/${movie._id}`}
                  className="btn btn-primary rounded-full"
                >
                  See Details
                </Link>
                <button class="btn rounded-full" type="button">
                  Add to favorites
                </button>
              </div>
            </div>
            <p class="text-sm text-slate-500">Don't miss this masterpiece.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MovieOfTheDay;
