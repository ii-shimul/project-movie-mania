import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "../../src/index.css";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const location = useLocation();
  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
    document.querySelector("html").setAttribute("class", localTheme);
  }, [theme]);
  const { logOut, user } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-movies"}>All Movies</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/add-movie"}>Add Movie</NavLink>
          </li>
          <li>
            <NavLink to={"/my-favorites"}>My Favorites</NavLink>
          </li>
        </>
      )}
      {location.pathname === "/" && (
        <>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </>
      )}
      <li>
        <NavLink to={"/reviews"}>Reviews</NavLink>
      </li>
    </>
  );
  if (location.pathname === "/") {
    return (
      <div className="navbar bg-black bg-opacity-20 z-40">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white/30 backdrop-blur-md rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl max-sm:btn-sm">
            {" "}
            <img className="h-7" src={"/logo-inverted.png"} alt="" /> MovieMania
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end space-x-2">
          <label className="swap swap-rotate mr-2">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={handleTheme} />

            {/* sun icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {user && user.photoURL ? (
            <Tippy content={user.displayName} placement="bottom">
              <div className="avatar online cursor-pointer">
                <div className="w-12 max-sm:w-8 rounded-full">
                  <img alt="user image" src={user.photoURL} />
                </div>
              </div>
            </Tippy>
          ) : user ? (
            <Tippy content={user.displayName} placement="bottom">
              <div className="online cursor-pointer">
                <div className="w-12 max-sm:w-8 rounded-full">
                  <img
                    alt="user image"
                    src="https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000"
                  />
                </div>
              </div>
            </Tippy>
          ) : (
            <Tippy content={"You are not logged in."} placement="bottom">
              <div className="online cursor-pointer">
                <div className="w-12 max-sm:w-8 rounded-full">
                  <img
                    alt="user image"
                    src="https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000"
                  />
                </div>
              </div>
            </Tippy>
          )}
          {user ? (
            <button
              onClick={logOut}
              className="btn btn-active btn-neutral max-sm:btn-sm"
            >
              LogOut
            </button>
          ) : (
            <div className="space-x-2">
              <Link
                to={"/login"}
                className="btn btn-active btn-neutral max-sm:btn-sm"
              >
                LogIn
              </Link>
              <Link
                to={"/register"}
                className="btn btn-active btn-neutral max-sm:btn-sm max-md:hidden"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="navbar bg-blue-200 z-40">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white/30 backdrop-blur-md rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl max-sm:btn-sm">
          {" "}
          <img className="h-7" src={"/logo-bg-removed.png"} alt="" /> MovieMania
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end space-x-2">
        <label className="swap swap-rotate mr-2">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onClick={handleTheme} />

          {/* sun icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {user && user.photoURL ? (
          <Tippy content={user.displayName} placement="bottom">
            <div className="avatar online cursor-pointer">
              <div className="w-12 max-sm:w-8 rounded-full">
                <img alt="user image" src={user.photoURL} />
              </div>
            </div>
          </Tippy>
        ) : user ? (
          <Tippy content={user.displayName} placement="bottom">
            <div className="online cursor-pointer">
              <div className="w-12 max-sm:w-8 rounded-full">
                <img
                  alt="user image"
                  src="https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000"
                />
              </div>
            </div>
          </Tippy>
        ) : (
          <Tippy content={"You are not logged in."} placement="bottom">
            <div className="online cursor-pointer">
              <div className="w-12 max-sm:w-8 rounded-full">
                <img
                  alt="user image"
                  src="https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000"
                />
              </div>
            </div>
          </Tippy>
        )}
        {user ? (
          <button
            onClick={logOut}
            className="btn btn-active btn-neutral max-sm:btn-sm"
          >
            LogOut
          </button>
        ) : (
          <div className="space-x-2">
            <Link
              to={"/login"}
              className="btn btn-active btn-neutral max-sm:btn-sm"
            >
              LogIn
            </Link>
            <Link
              to={"/register"}
              className="btn btn-active btn-neutral max-sm:btn-sm max-md:hidden"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
