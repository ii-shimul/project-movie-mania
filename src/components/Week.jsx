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
    <section className="py-10 max-sm:w-[90%] max-sm:mx-auto">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Movie of the Century
        </h2>
        <p className="my-3 opacity-70 text-center mb-6">
          According to our users this is the best movie of all time.
        </p>
        <div
          data-aos="flip-right"
          className="card shadow-xl hover:scale-[1.01] transform transition max-w-3xl mx-auto"
        >
          <figure>
            <img
              src={movie.poster}
              alt={movie.title}
              className="rounded-t-xl h-fit w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {movie.title}
            </h3>
            <p className="text-gray-600 mb-4">{movie.summary}</p>
            <div className="flex justify-center items-center text-yellow-500 mb-4">
              {[...Array(movie.rating)].map((_, i) => (
                <span key={i} className="text-lg">
                  ⭐
                </span>
              ))}
            </div>
            <Link to={`/movies/${movie._id}`} className="btn btn-primary">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieOfTheDay;
