import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Movie = ({ movie }) => {
  return (
    <div
      data-aos="fade-up"
      className="border border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white dark:bg-[#121212] transform transition hover:scale-[1.02] hover:shadow-2xl"
    >
      <img
        src={movie.poster}
        alt={movie.title}
        className="h-[500px] w-full object-cover"
      />
      <h2 className="md:text-xl font-bold truncate text-center mt-3">
        {movie.title}
      </h2>
      <div className="p-4 grid grid-cols-2">
        <p className="text-sm text-gray-600 mt-1">{movie.genre.join(", ")}</p>
        <p className="text-sm text-gray-600 mt-1">{movie.duration} mins</p>
        <p className="text-sm text-gray-600 mt-1">{movie.release}</p>
        <div className="flex items-center mt-2">
          <span className="ml-2 flex items-center text-yellow-500">
            {Array.from({ length: Math.round(movie.rating) }, (_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21 16.54 14.24 22 10.27 15.24 9.64 12 3 8.76 9.64 2 10.27 7.46 14.24 5.82 21z" />
              </svg>
            ))}
          </span>
        </div>
        <Link className="col-span-2 mt-3" to={`/movies/${movie._id}`}>
          <button className="btn w-full bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none transition">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Movie;
