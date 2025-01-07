import React from "react";
import { toast, Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const FavMovie = ({ movie, user, favorites, setFavorites }) => {
  const handleDelete = () => {
    const userEmail = user?.email;
    const { _id } = movie;

    fetch("https://movie-mania-server-drab.vercel.app/favorites", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail, _id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Removed from favorites",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
        const remaining = favorites.filter((favorite) => favorite._id !== _id);
        setFavorites(remaining);
      })
      .catch((error) => console.error("Error removing from favorites:", error));
  };
  return (
    <div
      data-aos="fade-up"
      className="border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition hover:scale-[1.02] hover:shadow-2xl"
    >
      <ToastContainer></ToastContainer>
      <img
        src={movie.poster}
        alt={movie.title}
        className="h-[500px] w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 truncate">
          {movie.title}
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          <span className="font-medium">Genre:</span> {movie.genre.join(", ")}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          <span className="font-medium">Duration:</span> {movie.duration} mins
        </p>
        <p className="text-sm text-gray-600 mt-1">
          <span className="font-medium">Release Year:</span> {movie.release}
        </p>
        <div className="flex items-center mt-2">
          <span className="text-sm font-medium text-gray-800">Rating:</span>
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
        <button
          onClick={handleDelete}
          className="btn mt-4 w-full py-2 btn-warning"
        >
          Delete From Favorites
        </button>
      </div>
    </div>
  );
};

export default FavMovie;
