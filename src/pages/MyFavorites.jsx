import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import FavMovie from "../components/FavMovie";

const MyFavorites = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (user?.email) {
        try {
          const userEmail = user?.email;
          const res = await fetch(
            `https://movie-mania-server-drab.vercel.app/favorites/${userEmail}`
          );
          const favoriteMovieIds = await res.json();
          const movieFetches = favoriteMovieIds.favorites.map((id) =>
            fetch(
              `https://movie-mania-server-drab.vercel.app/movies/${id}`
            ).then((res) => res.json())
          );
          const movieDetails = await Promise.all(movieFetches);
          const validMovieDetails = movieDetails.filter(
            (movie) => movie !== null
          );
          setFavorites(validMovieDetails);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchFavorites();
  }, [user]);
  if (loading) {
    return (
      <div className="w-full min-h-80 flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  } 
  if (!favorites.length) {
    return (
      <div className="w-full min-h-80 flex justify-center items-center">
        <h1 className="text-5xl text-center">
          You have no favorite movies yet.
        </h1>
      </div>
    );
  }

  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] max-w-6xl mx-auto my-5">
      <h1 className="text-4xl my-7 text-center font-semibold max-sm:text-2xl">
        Your Favorite Movies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {favorites.map((movie) => (
          <FavMovie
            setFavorites={setFavorites}
            favorites={favorites}
            user={user}
            movie={movie}
          ></FavMovie>
        ))}
      </div>
    </div>
  );
};

export default MyFavorites;
