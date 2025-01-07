import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [perMovies, setPerMovies] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [sort, setSort] = useState("");
  useEffect(() => {
    fetch("https://movie-mania-server-drab.vercel.app/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setPerMovies(data);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    if (searchVal === "") {
      setMovies(perMovies);
      return;
    }
    const filterBySearch = perMovies.filter((mov) => {
      if (mov.title.toLowerCase().includes(searchVal.toLowerCase())) {
        return mov;
      }
    });
    setMovies(filterBySearch);
  }, [searchVal]);

  useEffect(() => {
    if (sort === "Ascending") {
      const sortedMovies = movies.sort((a, b) => a.rating - b.rating);
      setMovies(sortedMovies);
    } else {
      const sortedMovies = movies.sort((a, b) => b.rating - a.rating);
      setMovies(sortedMovies);
    }
  }, [sort]);

  if (!movies.length) {
    return (
      <div className="w-full min-h-80 flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="w-[90%] max-w-7xl mx-auto my-5">
      <h1 className="text-4xl my-7 text-center font-semibold max-sm:text-2xl">
        Explore the realm of great movies.
      </h1>
      <div className="flex justify-between items-center mb-5">
        <div className="">
          <select
            onChange={(e) => setSort(e.target.value)}
            className="select select-bordered  max-w-xs"
          >
            <option disabled selected>
              Sort by rating
            </option>
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </div>
        <label className="input input-bordered flex items-center gap-2 max-sm:w-36">
          <input
            onChange={(e) => setSearchVal(e.target.value)}
            type="text"
            className="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {movies.map((movie) => (
          <Movie key={movie._id} movie={movie}></Movie>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
