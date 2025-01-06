import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const TrendingMovies = () => {
  const {movies} = useContext(AuthContext);
  const sortedMovies = movies.sort((a, b) => a.rating - b.rating).slice(-0, -7);

  return (
    // <section className="py-10 max-sm:w-[90%] max-sm:mx-auto">
    //   <div className="container mx-auto">
    //     <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
    //       Trending Movies
    //     </h2>
    //     <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    //       {sortedMovies.map((movie) => (
    //         <div
    //           data-aos="fade-up"
    //           key={movie._id}
    //           className="card shadow-xl hover:scale-[1.02] transform transition"
    //         >
    //           <figure>
    //             <img
    //               src={movie.poster}
    //               alt={movie.title}
    //               className="rounded-t-xl h-96 w-full object-cover"
    //             />
    //           </figure>
    //           <div className="card-body text-center">
    //             <h3 className="text-2xl font-bold mb-2 text-gray-800">
    //               {movie.title}
    //             </h3>
    //             <p className="text-gray-600 mb-4">{movie.genre.join(", ")}</p>
    //             <div className="flex justify-center items-center text-yellow-500 mb-2">
    //               {[...Array(movie.rating)].map((_, i) => (
    //                 <span key={i} className="text-lg">
    //                   ⭐
    //                 </span>
    //               ))}
    //             </div>
    //             <button className="btn btn-primary">See Details</button>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="py-10 max-sm:w-[90%] max-sm:mx-auto">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Trending Movies
        </h2>
        <p className="my-3 opacity-70 text-center mb-6">
          Explore the movies that are trending now worldwide.
        </p>
        <div className="w-full">
          <Marquee className="py-5">
            {sortedMovies.map((movie) => (
              <div
                data-aos="fade-up"
                key={movie._id}
                className="card w-[300px] h-[560px] shadow-xl mx-5"
              >
                <figure>
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="rounded-t-xl h-96 w-full object-cover"
                  />
                </figure>
                <div className="card-body text-center">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">
                    {movie.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{movie.genre.join(", ")}</p>
                  <div className="flex justify-center items-center text-yellow-500 mb-2">
                    {[...Array(movie.rating)].map((_, i) => (
                      <span key={i} className="text-lg">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <Link to={`/movies/${movie._id}`} className="btn btn-primary">See Details</Link>
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
