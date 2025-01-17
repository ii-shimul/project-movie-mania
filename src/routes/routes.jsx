import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AllMovies from "../pages/AllMovies";
import AddMovie from "../pages/AddMovie";
import MyFavorites from "../pages/MyFavorites";
import PrivateRoute from "./PrivateRoute";
import MovieDetails from "../pages/MovieDetails";
import UpdateMovie from "../pages/UpdateMovie";
import UserReviews from "../components/Reviews";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-movies",
        element: <AllMovies></AllMovies>,
      },
      {
        path: "/add-movie",
        element: (
          <PrivateRoute>
            <AddMovie></AddMovie>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-favorites",
        element: (
          <PrivateRoute>
            <MyFavorites></MyFavorites>
          </PrivateRoute>
        ),
      },
      {
        path: `/movies/:id`,
        element: <MovieDetails></MovieDetails>,
        loader: ({ params }) =>
          fetch(
            `https://movie-mania-server-drab.vercel.app/movies/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateMovie></UpdateMovie>
          </PrivateRoute>
        ),
      },
      {
        path: "/reviews",
        element: <UserReviews></UserReviews>,
      },
    ],
  },
]);
