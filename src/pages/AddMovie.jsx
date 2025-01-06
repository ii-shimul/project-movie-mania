import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { AuthContext } from "../provider/AuthProvider";
import Multiselect from "multiselect-react-dropdown";
import Swal from "sweetalert2";
import { Bounce, toast, ToastContainer } from "react-toastify";

const AddMovie = () => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const [genre, setGenre] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.title.length < 2) {
      toast.error("Title should be at least 2 characters.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    } else if (data.duration < 60) {
      toast.error("Duration must be greater than 60 minutes.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    } else if (!data.release) {
      toast.error("Select a release year.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    } else if (data.summary.length < 10) {
      toast.error("Summary should be at least 10 characters.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    } else if (!rating) {
      toast.error("Give a rating.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    const movie = {
      poster: data.poster,
      title: data.title,
      genre: genre,
      duration: data.duration,
      release: data.release,
      rating: rating,
      summary: data.summary,
      authorEmail: user.email,
    };

    fetch("https://movie-mania-server-drab.vercel.app/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully added!",
            text: "Thank you for adding another movie",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        Swal.fire({
          title: "Error",
          text: "Failed to add movie. Please try again.",
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Add New Movie
        </h1>
        <p className="text-center text-gray-600 mb-10 leading-relaxed">
          Easily add movies to your collection by filling out the form below.
          Provide all the necessary details to ensure the movie information is
          accurate and visually appealing.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Movie Poster
              </label>
              <input
                type="url"
                {...register("poster", { required: true })}
                placeholder="Enter poster URL"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.poster && (
                <span className="text-red-500">Poster URL is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Movie Title
              </label>
              <input
                type="text"
                {...register("title", { required: true })}
                placeholder="Enter movie title"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.title && (
                <span className="text-red-500">Title is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Genre
              </label>
              <Multiselect
                options={[
                  "Action",
                  "Comedy",
                  "Drama",
                  "Horror",
                  "Romance",
                  "Sci-Fi",
                  "Thriller",
                  "Fantasy",
                  "Documentary",
                  "Animation",
                  "Adventure",
                ]}
                isObject={false}
                onSelect={(selectedList) => setGenre(selectedList)}
                onRemove={(selectedList) => setGenre(selectedList)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Duration (minutes)
              </label>
              <input
                type="number"
                {...register("duration", { required: true })}
                placeholder="Enter duration"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.duration && (
                <span className="text-red-500">Duration is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Release Year
              </label>
              <select
                {...register("release", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select year</option>
                {Array.from({ length: 55 }, (_, i) => (
                  <option key={i} value={2024 - i}>
                    {2024 - i}
                  </option>
                ))}
              </select>
              {errors.release && (
                <span className="text-red-500">Release year is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Rating
              </label>
              <Rating
                style={{ maxWidth: 150 }}
                value={rating}
                onChange={setRating}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Summary
              </label>
              <textarea
                {...register("summary", { required: true })}
                placeholder="Enter summary"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.summary && (
                <span className="text-red-500">Summary is required</span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 w-full bg-blue-500 hover:bg-blue-900 btn text-white text-lg font-semibold rounded-lg shadow-md py-2"
          >
            Add Movie
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddMovie;
