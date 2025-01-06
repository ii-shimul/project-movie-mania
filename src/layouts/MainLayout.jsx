import React, { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import "animate.css";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Headroom from "react-headroom";

const MainLayout = () => {
  // dynamic titles
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Home | MovieMania";
        break;
      case "/login":
        document.title = "Login | MovieMania";
        break;
      case "/register":
        document.title = "Register | MovieMania";
        break;
      case "/userProfile":
        document.title = "User Profile | MovieMania";
        break;
      case "/updateProfile":
        document.title = "Update Profile | MovieMania";
        break;
      case "/resetPass":
        document.title = "Reset Password | MovieMania";
        break;
      default:
        document.title = "MovieMania";
    }
  }, [location]);
  return (
    <>
      <ScrollRestoration></ScrollRestoration>
      {location.pathname === "/" ? (
        <div>
          <div className="max-h-screen max-sm:max-h-[290px]">
            <Banner></Banner>
          </div>
          <div className="absolute top-0 w-full text-white z-40">
            <Headroom>
              <NavBar></NavBar>
            </Headroom>
          </div>
        </div>
      ) : (
        <Headroom>
          <NavBar></NavBar>
        </Headroom>
      )}
      <div style={{ minHeight: "calc(100vh - 321.5px)" }}>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
