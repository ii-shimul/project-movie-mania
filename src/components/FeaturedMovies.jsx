import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { motion } from "motion/react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const FeaturedMovies = () => {
  const { movies } = useContext(AuthContext);
  const sortedMovies = movies.sort((a, b) => b.rating - a.rating).slice(0,8);
  return (
    <div className="py-10 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">
        Featured Movies
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl max-xl:px-5 max-sm:gap-4 mx-auto">
        {sortedMovies.map((movie) => (
          <motion.div
            key={movie._id}
            data-aos="fade-up"
            whileHover={{ scale: 1.05 }}
            className="relative bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-all"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white opacity-0 hover:opacity-100 transition duration-75 ease-in-out">
              <h2 className="text-lg font-bold truncate">{movie.title}</h2>
              <div className="flex gap-3">
                <p className="text-sm text-gray-300">
                  {movie.genre.join(", ")}
                </p>
                <p className="text-sm text-gray-300">{movie.duration} mins</p>
                <p className="text-sm text-gray-300">{movie.release}</p>
              </div>

              <div className="flex items-center mt-2">
                {Array.from({ length: Math.round(movie.rating) }, (_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <Link to={`/movies/${movie._id}`}>
                <button className="mt-4 w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none transition">
                  See More
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMovies;
