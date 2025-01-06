import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MovieDetails = () => {
  const { _id, poster, title, genre, duration, release, rating, summary } =
    useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const addToFavorites = () => {
    const userEmail = user.email;
    fetch("https://movie-mania-server-drab.vercel.app/favorites", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ userEmail, _id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.modifiedCount) {
          Swal.fire({
            title: "Ooh no!",
            text: "Already added to favorites",
            icon: "error",
          });
        } else {
          Swal.fire({
            title: "Success!",
            text: "Added to favorites",
            icon: "success",
          });
        }
      });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://movie-mania-server-drab.vercel.app/movies/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              navigate("/all-movies");
            }
          });
      }
    });

    const userEmail = user?.email;

    fetch("https://movie-mania-server-drab.vercel.app/favorites", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail, _id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          console.log(data.message);
        }
      })
      .catch((error) => console.error("Error removing from favorites:", error));
  };
  return (
    <div className="sm:pt-6 sm:pb-48 py-6 flex flex-col justify-center sm:py-12">
      <div className="py-3 sm:max-w-3xl sm:mx-auto">
        <div className="bg-white shadow-lg border-gray-100 max-h-fit border sm:rounded-3xl p-8 flex max-sm:flex-col max-sm:gap-4 sm:space-x-8">
          <div className="sm:max-h-44 sm:overflow-visible ">
            <img
              className="rounded-3xl sm:max-h-[450px] shadow-lg object-cover"
              src={poster}
              alt
            />
          </div>
          <div className="flex flex-col sm:w-1/2 sm:space-y-4 max-sm:space-y-2">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold">{title}</h2>
              <div className="h-full flex items-center justify-center">
                <span className="text-yellow-500 font-bold ml-2">
                  {"⭐".repeat(Math.round(rating))}
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <div className="text-sm text-gray-400">Released</div>
                <div className="text-gray-800">{release}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Genre</div>
                <div className="text-gray-800">{genre.join(", ")} </div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Duration</div>
                <div className="text-gray-800">{duration} minutes</div>
              </div>
            </div>
            <p className=" text-gray-400 max-h-40">{summary}</p>
            <div className="flex gap-2">
              <Link to={`/update/${_id}`} className="btn btn-secondary grow">
                Update
              </Link>
              <button className="btn btn-warning" onClick={handleDelete}>
                Delete
              </button>
            </div>
            <button
              className="btn bg-blue-600 w-full text-white font-semibold text-lg shadow-lg hover:bg-blue-700 transition"
              onClick={addToFavorites}
            >
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
